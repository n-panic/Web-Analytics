import FingerprintJS from '@fingerprintjs/fingerprintjs'

export async function getFingerprint() {
  const fpPromise = FingerprintJS.load();
  const fp = await fpPromise
  return await fp.get();
}
