import Picture from "./picture";

export default function Features({
  features
}: {
  features: {
    icon: string;
    title: string;
    text: string;
  }[];
}) {
  return (
    <div className="features">
      <div className="grid">
        {features.map((feature) => (
          <div className="card" key={feature.title}>
            <Picture src={feature.icon} alt={`Icon ${feature.title}`} />
            <h4>
              <span>
                <b>{feature.title}</b>
              </span>
            </h4>
            <br></br>
            <p dangerouslySetInnerHTML={{ __html: feature.text }} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .features {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 850px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        .card :global(img) {
          width: 80px;
          height: 80px;
        }
      `}</style>
    </div>
  );
}
