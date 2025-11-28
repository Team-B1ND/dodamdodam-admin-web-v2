import * as s from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { People, Megaphone, Gear, ExclamationmarkCircle } from "@b1nd/dds-web";
import Phone from "@/assets/Phone.svg";

export const Tabbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    { id: "member", name: "멤버", icon: People, path: "/" },
    { id: "banner", name: "배너", icon: Megaphone, path: "/banner" },
    { id: "joinApproval", name: "가입승인", icon: Gear, path: "/joinApproval" },
    {
      id: "phone",
      name: "전화번호 관리",
      icon: Phone,
      path: "/phone",
      isImage: true,
    },
    {
      id: "authority",
      name: "권한",
      icon: ExclamationmarkCircle,
      path: "/authority",
    },
  ];

  return (
    <s.Container>
      <s.MenuList>
        {menus.map((menu) => {
          const isActive = location.pathname === menu.path;
          const IconComponent = menu.icon;

          return (
            <s.MenuButton
              key={menu.id}
              $active={isActive}
              onClick={() => navigate(menu.path)}
            >
              {menu.isImage ? (
                <s.PhoneIcon src={menu.icon} alt="phone" $active={isActive} />
              ) : (
                <IconComponent
                  size={24}
                  color={isActive ? "#FFFFFF" : "#000000"}
                />
              )}
              <span>{menu.name}</span>
            </s.MenuButton>
          );
        })}
      </s.MenuList>

      <s.Footer>
        <p>version: 1.0.0</p>
        <p>© B1ND Team Corp.</p>
      </s.Footer>
    </s.Container>
  );
};
