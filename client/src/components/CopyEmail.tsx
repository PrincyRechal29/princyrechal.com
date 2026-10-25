import { useEffect, useState } from "react";

/* The email, large, with a copy button that confirms what it did. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <a
        className="break-all text-[clamp(1.4rem,1rem+2.6vw,3rem)] font-bold tracking-tight text-[var(--violet)] transition-colors hover:text-[var(--violet-deep)]"
        href={`mailto:${email}`}
      >
        {email}
      </a>
      <button type="button" className="btn btn-quiet !py-2.5" onClick={copy} aria-live="polite">
        {copied ? "Copied" : "Copy address"}
      </button>
    </div>
  );
}
