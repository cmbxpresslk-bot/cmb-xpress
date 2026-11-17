import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, MapPin, MessageSquarePlus, Star } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

export interface GoogleReviewItem {
  name: string;
  rating: number | null;
  relativePublishTimeDescription: string;
  publishTime: string;
  text: string;
  googleMapsUri: string;
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
}

interface GoogleReviewsResponse {
  configured: boolean;
  quotaExceeded?: boolean;
  placeId?: string;
  displayName?: string;
  rating?: number | null;
  userRatingCount?: number | null;
  googleMapsUri?: string;
  reviewsUri?: string;
  writeAReviewUri?: string;
  reviews?: GoogleReviewItem[];
  error?: {
    status?: string;
    message?: string;
  };
}

interface GoogleReviewsSectionProps {
  compact?: boolean;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'G';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function StarRating({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rounded
              ? 'fill-[#D4AF37] text-[#D4AF37]'
              : 'fill-neutral-200 text-neutral-200'
          }`}
        />
      ))}
    </div>
  );
}

export function GoogleReviewsSection({ compact = false }: GoogleReviewsSectionProps) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<GoogleReviewsResponse | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let active = true;

    async function fetchGoogleReviews() {
      try {
        const res = await fetch('/api/google-reviews');
        const json: GoogleReviewsResponse = await res.json().catch(() => ({
          configured: false,
          reviews: [],
        }));

        if (
          res.status === 429 ||
          json?.quotaExceeded ||
          json?.error?.status === 'RESOURCE_EXHAUSTED'
        ) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }

        if (active) {
          setData(json);
        }
      } catch {
        if (active) {
          setData({ configured: false, reviews: [] });
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    fetchGoogleReviews();
    return () => {
      active = false;
    };
  }, []);

  const reviews = Array.isArray(data?.reviews) ? data.reviews : [];
  const displayedReviews = compact ? reviews.slice(0, 3) : reviews;
  const reviewsLink = data?.reviewsUri || data?.googleMapsUri || companyConfig.googleReviewsUrl;
  const writeReviewLink = data?.writeAReviewUri || companyConfig.googleWriteReviewUrl;
  const listingTitle = data?.displayName || 'CMB Xpress Courier & Cargo - Wattala';

  return (
    <div className="space-y-8">
      {/* Header & Aggregate Google Rating Summary */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            <span>Google Maps Customer Reviews</span>
            <span aria-hidden="true" className="text-neutral-300">
              ·
            </span>
            <span className="text-neutral-600 font-medium normal-case tracking-normal">
              Powered by Google
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111111]">
            Verified Feedback from Our Wattala Hub
          </h2>
          <p className="mt-1.5 text-sm text-neutral-600 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#B5121B] shrink-0" />
            <span>
              {listingTitle} · {companyConfig.address}
            </span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {typeof data?.rating === 'number' && (
            <div className="bg-white border border-neutral-200 rounded-lg px-4 py-2.5 flex items-center gap-3">
              <div className="text-2xl font-extrabold text-[#111111] tabular-nums leading-none">
                {data.rating.toFixed(1)}
              </div>
              <div>
                <StarRating rating={data.rating} />
                <div className="text-xs text-neutral-500 mt-0.5 tabular-nums">
                  {typeof data.userRatingCount === 'number'
                    ? `Based on ${data.userRatingCount} Google reviews`
                    : 'Google Maps rating'}
                </div>
              </div>
            </div>
          )}

          <a
            href={reviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-[#111111] bg-white border border-neutral-300 rounded-md hover:border-[#B5121B] hover:text-[#B5121B] transition-colors whitespace-nowrap"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={writeReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write a Review</span>
          </a>
        </div>
      </div>

      {/* Reviews Grid / Loading / Honest Listing Fallback */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((skeleton) => (
            <div
              key={skeleton}
              className="bg-white border border-neutral-200 rounded-xl p-6 space-y-4 animate-pulse"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-200" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-3.5 w-28 bg-neutral-200 rounded" />
                  <div className="h-3 w-20 bg-neutral-100 rounded" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-neutral-100 rounded" />
                <div className="h-3 w-5/6 bg-neutral-100 rounded" />
                <div className="h-3 w-2/3 bg-neutral-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : displayedReviews.length > 0 ? (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            compact ? 'lg:grid-cols-3' : 'lg:grid-cols-3'
          } gap-6`}
        >
          {displayedReviews.map((review, index) => {
            const authorName = review.authorAttribution?.displayName || 'Google User';
            const authorUri = review.authorAttribution?.uri;
            const photoUri = review.authorAttribution?.photoUri;
            const imageKey = `${review.name || authorName}-${index}`;
            const showPhoto = Boolean(photoUri) && !failedImages[imageKey];

            return (
              <motion.article
                key={review.name || `${authorName}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  {/* Reviewer Attribution Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {showPhoto ? (
                        <img
                          src={photoUri}
                          alt={authorName}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({ ...prev, [imageKey]: true }))
                          }
                          className="w-10 h-10 rounded-full object-cover border border-neutral-200 shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#111111] text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {getInitials(authorName)}
                        </div>
                      )}
                      <div className="min-w-0">
                        {authorUri ? (
                          <a
                            href={authorUri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-[#111111] hover:text-[#B5121B] truncate block"
                          >
                            {authorName}
                          </a>
                        ) : (
                          <div className="text-sm font-bold text-[#111111] truncate">
                            {authorName}
                          </div>
                        )}
                        <div className="text-xs text-neutral-500">
                          {review.relativePublishTimeDescription || 'Google Maps review'}
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 shrink-0">
                      Google
                    </span>
                  </div>

                  {/* Rating Stars */}
                  {typeof review.rating === 'number' && (
                    <div className="mt-4">
                      <StarRating rating={review.rating} />
                    </div>
                  )}

                  {/* Review Body */}
                  <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                    {review.text
                      ? `“${review.text}”`
                      : `Rated ${review.rating ?? 5} out of 5 stars on Google Maps.`}
                  </p>
                </div>

                {/* Attribution Footer Link */}
                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>Google Maps Attribution</span>
                  {(review.googleMapsUri || reviewsLink) && (
                    <a
                      href={review.googleMapsUri || reviewsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#B5121B] hover:underline"
                    >
                      <span>View original</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      ) : typeof data?.rating === 'number' ? (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="bg-[#111111] text-white rounded-xl px-6 py-4 text-center shrink-0">
              <div className="text-4xl font-extrabold tabular-nums leading-none">
                {data.rating.toFixed(1)}
              </div>
              <div className="mt-2 flex justify-center">
                <StarRating rating={data.rating} />
              </div>
              <div className="mt-1.5 text-[11px] text-neutral-300 uppercase tracking-wider">
                out of 5.0
              </div>
            </div>

            <div className="space-y-1.5 max-w-xl">
              <div className="text-base font-bold text-[#111111]">{listingTitle}</div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Rated{' '}
                <strong className="text-[#111111]">
                  {data.rating.toFixed(1)} stars
                </strong>
                {typeof data.userRatingCount === 'number'
                  ? ` across ${data.userRatingCount} verified customer ratings`
                  : ''}{' '}
                on Google Maps. Browse all original customer feedback directly on our Google Maps listing or share your own delivery experience.
              </p>
              <p className="text-xs text-neutral-500">
                Source: Google Maps · Live place data via Google Places API
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={reviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#111111] rounded-md hover:bg-[#B5121B] transition-colors whitespace-nowrap"
            >
              <span>Read All Reviews on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={writeReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#111111] border border-neutral-300 rounded-md hover:border-[#B5121B] hover:text-[#B5121B] transition-colors whitespace-nowrap"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#B5121B]" />
              <span>Add Your Review</span>
            </a>
          </div>
        </motion.div>
      ) : (
        <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-sm font-bold text-[#111111]">{listingTitle}</div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Live Google Maps reviews could not be retrieved right now. You can read all original customer reviews directly on our official Google Maps business profile.
            </p>
          </div>
          <a
            href={reviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#111111] rounded-md hover:bg-[#B5121B] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Open Google Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}
