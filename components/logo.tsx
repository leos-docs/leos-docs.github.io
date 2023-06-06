import { useRouter } from "next/router";

export default function Logo() {
  const router = useRouter();

  return (
    <div className="logo">
      <img src="/logo.svg" alt="Logo" />
      <div className="title">
        <h5>LeOS</h5>
        {router.pathname.startsWith("/docs") && (
          <span className="text-gray">Docs</span>
        )}
        {router.pathname.startsWith("/installation") && (
          <span className="text-gray">Installation</span>
        )}
      </div>
      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
        }

        .logo img {
          width: 30px;
          height: 30px;
        }

        .title {
          display: flex;
          align-items: flex-end;
        }

        h5,
        span {
          line-height: 1;
        }

        h5 {
          margin: 0;
          margin-left: 12px;
        }

        span {
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
}
