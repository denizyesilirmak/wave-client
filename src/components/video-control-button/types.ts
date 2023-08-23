import { FunctionComponent, SVGProps } from "react";

type VideoControlButtonProps = {
  iconOn: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  iconOff: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  active?: boolean;
  onClick?: () => void;
  popOverText?: string;
};

export type { VideoControlButtonProps };
