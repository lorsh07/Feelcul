import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 프로젝트 루트의 .env를 읽어 둔다. 이미 설정된 환경 변수(Render 대시보드 등)가 있으면 그 값이 우선한다.
// 다른 서버 모듈이 import될 때 키를 읽으므로 index.ts에서 가장 먼저 import해야 한다.
const file = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../.env");
if (fs.existsSync(file)) process.loadEnvFile(file);
