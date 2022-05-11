/** @jsxImportSource @emotion/react */

import {COLORS} from "@app/shared/constants";
import { css } from '@emotion/react';
import React from 'react';
import {DotLoader} from "react-spinners";

export const AppLoader = () => {
  return (
  <div css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
      `}>
        <DotLoader color={COLORS.primary}></DotLoader>
    </div>
  );
};
