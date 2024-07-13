import { Link } from "@mui/material";

export const HomeContent = () => {
  return (
    <div>
      <Link display={"block"} href="/LibrariesShowcase">
        ライブラリ比較
      </Link>
      <Link display={"block"} href="/ButtonsShowcase">
        ボタン関連
      </Link>
      <Link display={"block"} href="/FormShowcase">
        フォーム関連
      </Link>
      <Link display={"block"} href="/NumbersShowcase">
        数値関連
      </Link>
      <Link display={"block"} href="/ListsShowcase">
        リスト関連
      </Link>
      <Link display={"block"} href="/AccordionsShowcase">
        アコーディオン関連
      </Link>
      <Link display={"block"} href="/ImagesShowcase">
        画像関連
      </Link>
      <Link display={"block"} href="/CardsShowcase">
        カード関連
      </Link>
    </div>
  );
};
