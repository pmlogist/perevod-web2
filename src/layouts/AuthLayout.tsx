import Link from "next/link";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";
import { BaseLayoutSchema } from "./BaseLayout";
import { Transition } from "@/components/Transition/Transition";
import { Icon } from "@/components/Icon/Icon";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayoutSchema = ({ children }: AuthLayoutProps) => {
  const { pathname } = useRouter();

  return (
    <div className={styles.authLayout}>
      <div className={styles.sideContent}>
        <div>
          <Link href="/">
            <a style={{ cursor: "pointer" }}>
              <Icon name="cat" width={30} height={30} />
            </a>
          </Link>
        </div>

        {pathname !== "/signup" ? (
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        ) : (
          <Link href="/signin">
            <a>Sign in</a>
          </Link>
        )}
      </div>
      <div className={styles.mainContent}>
        <Transition location={pathname}>{children}</Transition>
      </div>
    </div>
  );
};

export const AuthLayout = (page: JSX.Element) => {
  return (
    <BaseLayoutSchema>
      <AuthLayoutSchema>{page}</AuthLayoutSchema>
    </BaseLayoutSchema>
  );
};
