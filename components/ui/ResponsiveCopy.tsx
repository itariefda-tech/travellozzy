import type { ResponsiveCopy as ResponsiveCopyValue } from '@/types/content';

export function ResponsiveCopy({ copy }: { copy: ResponsiveCopyValue }) {
  return (
    <>
      <span className="copy-desktop">{copy.desktop}</span>
      <span className="copy-mobile">{copy.mobile}</span>
    </>
  );
}
