import React from "react";

// PUBLIC_INTERFACE
/**
 * Displays a catalog of car spare parts with their details, prices, and images.
 * Uses static mock data for demonstration.
 */
function ProductCatalog() {
  // Sample mock data for car spare parts
  const products = [
    {
      id: 1,
      name: "Front Brake Pads",
      price: 59.99,
      description: "Premium ceramic brake pads for superior stopping power and low dust. Compatible with most sedans and hatchbacks.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Engine Oil Filter",
      price: 13.49,
      description: "High-efficiency oil filter for extended engine life. Fits most Toyota, Honda, and Hyundai models.",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Car Battery 12V",
      price: 129.00,
      description: "Reliable 12-volt car battery with 3-year warranty. Delivers power for all standard cars and SUVs.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Windshield Wiper Blades (Set of 2)",
      price: 24.99,
      description: "All-season rubber wiper blades. Easy installation, streak-free performance, and universal fit.",
      image: "https://images.unsplash.com/photo-1415639639372-278b5b6e554c?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Headlight Bulb H4",
      price: 16.75,
      description: "Bright halogen H4 headlight bulbs for enhanced nighttime visibility. 12V 60/55W, pack of two.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "Air Filter Element",
      price: 17.60,
      description: "OEM replacement air filter. Traps dust and particles for better engine performance and efficiency.",
      image: "https://images.unsplash.com/photo-1431512284068-4c4002298068?auto=format&fit=crop&w=150&q=80"
    }
  ];

  // Mock customer review data for each product (by product id)
  const reviewsData = {
    1: [
      { name: "Alice", rating: 5, comment: "Perfect fit and much quieter now!" },
      { name: "John Doe", rating: 4, comment: "Works well, fast shipping." }
    ],
    2: [
      { name: "Maria", rating: 5, comment: "Good quality filter, fits my Corolla without issues." },
      { name: "David", rating: 4, comment: "Engine runs smoother, happy with purchase." }
    ],
    3: [
      { name: "Ryan", rating: 5, comment: "Battery is powerful, easy to install." },
      { name: "Chen", rating: 4, comment: "Solid battery, decent value." }
    ],
    4: [
      { name: "Priya", rating: 5, comment: "Excellent wipers, streak-free and easy to install!" },
    ],
    5: [
      { name: "James", rating: 4, comment: "Very bright, improved my night driving." }
    ],
    6: [
      { name: "Olga", rating: 5, comment: "Cleaned up my engine performance, great OEM part." },
      { name: "Kumar", rating: 4, comment: "Exactly as described, shipping could be faster." }
    ]
  };

  // Helper function to render stars for ratings
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
    <section style={{ marginTop: 40 }}>
      <h2 className="title" style={{ fontSize: "2.2rem", textAlign: "center", marginBottom: 24 }}>
        Product Catalog
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "28px",
          width: "100%",
        }}
      >
        {products.map((part) => (
          <div
            key={part.id}
            className="card"
            style={{
              padding: "24px 18px",
              borderRadius: 12,
              border: "1px solid var(--border-color)",
              boxShadow: "0 2px 12px rgba(18,30,67,0.03)",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: 390,
              position: "relative"
            }}
          >
            <div style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: 18, color: "var(--primary)", textAlign: "center" }}>
              {part.name}
            </div>
            <div style={{ fontSize: "0.99rem", color: "var(--text-secondary)", minHeight: 60, marginBottom: 8, textAlign: "center" }}>
              {part.description}
            </div>
            <div style={{ fontWeight: 700, color: "var(--accent)", fontSize: "1.22rem", marginTop: "auto" }}>
              ${part.price.toFixed(2)}
            </div>
            {/* Customer Reviews Section */}
            <div
              style={{
                marginTop: 18,
                width: "100%",
                background: "#f9fbfd",
                borderRadius: 8,
                border: "1px solid #e0e3ef",
                padding: "12px 10px",
                marginBottom: 0,
                minHeight: reviewsData[part.id] ? 0 : 40,
                boxShadow: "0 1px 3px rgba(60,60,100,0.035)"
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  color: "var(--primary)",
                  fontSize: "1rem",
                  marginBottom: 6,
                  letterSpacing: "0.5px",
                }}
              >
                Customer Reviews
              </div>
              {(reviewsData[part.id] && reviewsData[part.id].length > 0) ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {reviewsData[part.id].map((review, idx) => (
                    <div key={idx}
                      style={{
                        padding: "7px 10px 7px 7px",
                        background: "#fff",
                        border: "1px solid #e0e3ef",
                        borderRadius: 6,
                        marginBottom: 2,
                        color: "#34384a",
                        fontSize: "0.99rem",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 1px 3px rgba(60,60,100,0.02)"
                      }}
                    >
                      <span style={{ fontWeight: 500, color: "var(--accent)", marginBottom: 2 }}>
                        {review.name}
                        <span style={{ marginLeft: 7 }}>{renderStars(review.rating)}</span>
                      </span>
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.98rem" }}>
                        {review.comment}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ color: "var(--text-secondary)", fontSize: "0.98rem" }}>No reviews yet.</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
export default ProductCatalog;

