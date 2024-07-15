import React from "react";
import { Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

export const HomeContent = () => {
  return (
    <div>
      <MuiLink component={Link} to="/LibrariesShowcase" display="block">
        ライブラリ比較
      </MuiLink>
      <MuiLink component={Link} to="/ButtonsShowcase" display="block">
        ボタン関連
      </MuiLink>
      <MuiLink component={Link} to="/FormShowcase" display="block">
        フォーム関連
      </MuiLink>
      <MuiLink component={Link} to="/NumbersShowcase" display="block">
        数値関連
      </MuiLink>
      <MuiLink component={Link} to="/ListsShowcase" display="block">
        リスト関連
      </MuiLink>
      <MuiLink component={Link} to="/AccordionsShowcase" display="block">
        アコーディオン関連
      </MuiLink>
      <MuiLink component={Link} to="/ImagesShowcase" display="block">
        画像関連
      </MuiLink>
      <MuiLink component={Link} to="/CardsShowcase" display="block">
        カード関連
      </MuiLink>
    </div>
  );
};
