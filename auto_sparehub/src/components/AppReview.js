import React from "react";

// PUBLIC_INTERFACE
/**
 * AppReview displays overall reviews about the application.
 * Uses mock data for reviewer name, star rating, and comment.
 */
function AppReview() {
  // Mock data for app-level reviews
  const reviews = [
    {
      name: "Jessica Lee",
      rating: 5,
      comment: "Fantastic platform! The interface is intuitive and ordering spare parts is a breeze. Highly recommended to car owners."
    },
    {
      name: "Amit Verma",
      rating: 4,
      comment: "Wide variety of products, fast support, and easy navigation. Would love to see more payment options."
    },
    {
      name: "Carla Smith",
      rating: 5,
      comment: "One of the best auto parts shops online. Checkout was quick and seamless."
    },
    {
      name: "Nguyen Tran",
      rating: 4,
      comment: "The site feels modern and loads fast. Found parts for my rare model—very impressed!"
    }
  ];

  // Helper to render star rating
  function renderStars(rating) {
    return (
      <span aria-label={`${rating} out of 5 stars`} style={{ color: "#fbc02d", fontWeight: 600 }}>
        {"★".repeat(rating)}
        <span style={{ color: "#e0e3ef" }}>
          {"★".repeat(5 - rating)}
        </span>
      </span>
    );
  }

  return (
    <section style={{ marginTop: 60 }}>
      <h2 className="title" style={{ fontSize: "2.1rem", marginBottom: 18, textAlign: "center", color: "var(--primary)" }}>
        What Our Users Say
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              minWidth: 260,
              maxWidth: 370,
              padding: "24px 20px",
              marginBottom: 8,
              borderRadius: 10,
              background: "#fff",
              border: "1px solid var(--border-color)",
              boxShadow: "0 1px 7px rgba(18,30,67,0.035)",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{ fontWeight: 600, color: "var(--accent)", marginBottom: 3, fontSize: "1.1rem" }}>
              {review.name}
            </div>
            <div style={{ marginBottom: 7 }}>
              {renderStars(review.rating)}
            </div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.5 }}>
              "{review.comment}"
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
export default AppReview;
