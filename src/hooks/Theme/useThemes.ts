import { getTheme } from "@/utils/getTheme";
import { useCallback, useMemo, useState } from "react";
import { ETheme } from "@b1nd/dds-web";

export const THEME_KEY = "DODAM_THEME";
type ThemeType = ETheme.LIGHT | ETheme.DARK;

/**
 * 다크 모드를 관리하는 커스텀 훅
 */
export const useThemes = () => {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>(getTheme());

    const themeColor = useMemo((): ETheme => {
      return currentTheme === ETheme.DARK ? ETheme.DARK : ETheme.LIGHT;
    }, [currentTheme]);

    const handleTheme = useCallback((): void => {
      const switchTheme = currentTheme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
      window.localStorage.setItem(THEME_KEY, switchTheme);
      setCurrentTheme(switchTheme);
    }, [currentTheme, setCurrentTheme]);

    return {
      themeColor,
      handleTheme,
    };
};