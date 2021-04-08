import { extendTheme } from "@chakra-ui/react";

import { fonts } from "./fonts";
import shadows from "./shadows";

export const theme = extendTheme({
   shadows,

   fonts,
});
