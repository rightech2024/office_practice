export function staticBlurDataURL() {
    const blurSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
        <filter id="b" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="1" />
        </filter>
        <rect width="100%" height="100%" filter="url(#b)" preserveAspectRatio="none" x='0' y='0' stroke-width='3' stroke='#7b9fa6' fill='#426874' />
    </svg>
    `

    const toBase64 = (str) => typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

    return `data:image/svg+xml;base64,${toBase64(blurSVG)}`;
}