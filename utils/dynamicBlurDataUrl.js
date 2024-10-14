const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://your-production-domain.com";

export async function dynamicBlurDataURL(url) {
  const base64str = await fetch(
    `${baseURL}/_next/image?url=${encodeURIComponent(url)}&w=15&q=60`
  )
    .then(async (res) => Buffer.from(await res.arrayBuffer()).toString("base64"))
    .catch(() => null); // Handle errors

  if (!base64str) {
    return "";
  }

  const blurSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="1" />
      </filter>
      <image href='data:image/jpeg;base64,${base64str}' width="100%" height="100%" filter="url(#b)" preserveAspectRatio="none" />
    </svg>
  `;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSVG)}`;
}