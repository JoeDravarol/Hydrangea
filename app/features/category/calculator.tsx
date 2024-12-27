export default function Calculator() {
  return (
    <div
      id="ember443"
      className="modal-overlay active ynab-u modal-popup modal-calculator"
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        style={{ top: '306.5px', left: '579.75px' }}
      >
        <div className="ynab-new-calculator">
          <button data-operator="+" type="button">
            <svg viewBox="0 0 10 10">
              <desc>plus</desc>
              <path d="M5.8 0v4h4v2h-4v4h-2V5.9H0V4.1h3.9V0z" />
            </svg>
          </button>
          <button data-operator="-" type="button">
            <svg viewBox="0 0 10 3">
              <desc>minus</desc>
              <path d="M0 0h10v2.2H0z" />
            </svg>
          </button>
          <button data-operator="*" type="button">
            <svg viewBox="0 0 10 10">
              <desc>multiply</desc>
              <path d="M9.8 1.4 6.4 4.8 10 8.5 8.6 9.8 5 6.2 1.4 9.8 0 8.5l3.6-3.7L.2 1.4 1.5 0 5 3.5 8.4 0z" />
            </svg>
          </button>
          <button data-operator="/" type="button">
            <svg viewBox="0 0 10 10">
              <desc>divide</desc>
              <path d="M0 4.1h9.6v1.8H0zm3.3-2.6.1-.6.3-.5.5-.3.6-.1.6.1.5.3.3.5.1.6-.1.6-.3.4-.5.4H4.2l-.8-.8zm0 7V8l.3-.4.5-.4q.3-.2.6 0h.6l.5.4.3.4.1.6-.1.6-.3.5-.5.3-.6.1-.6-.1-.8-.8z" />
            </svg>
          </button>
        </div>
        <svg
          className="modal-arrow"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            left: 27,
            bottom: '100%',
            height: '0.9375rem',
            width: '1.875rem',
          }}
        >
          <path d="M 0 100 L 50 0 L 100 100 L 0 100 Z" transform="" />
        </svg>
      </div>
    </div>
  );
}
