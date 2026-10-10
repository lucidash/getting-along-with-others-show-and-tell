# 프로젝트 작업 안내

영어 유치원 6~7세 수준의 Show & Tell HTML 발표 자료입니다.

- Topic: Getting Along with Others
- Essential Question: How do good friends act?
- 핵심 답: Good friends are kind. They share, take turns, and help each other.
- 8장, 약 2~3분, 실제 보여 줄 소품은 색연필 두세 자루

`index.html`은 그림과 키워드 중심이며, `script.html`에는 전체 영어 문장과 한국어 뜻·동작·예상 질문이 있습니다. `cards.html`은 카드 8장과 한 장 요약표입니다. 빌드나 외부 CDN 없이 로컬 파일로 실행합니다.

기존 두 Wonders 프로젝트의 구성을 참고했지만, 새 주제의 교재 본문·에디션·유닛은 확인되지 않았습니다. 특정 교재와 연결된다는 표현이나 아이의 실제 경험을 임의로 추가하지 마세요.

내용 변경 시 세 HTML 파일과 README의 발표 흐름을 함께 수정하세요. 슬라이드 수를 변경하면 `slides.js`의 숫자 키 및 해시 범위, 각 대본·큐 카드 번호도 맞춰야 합니다. 화면은 큰 글씨와 삽화 중심으로 유지하세요.

삽화 5장은 내장 imagegen 도구로 생성했고 최종 프롬프트는 `images/prompts.json`에 있습니다. 실제 친구 사진이나 개인 사진은 포함하지 않습니다.

## 빌드와 GitHub Pages

`npm run build`는 `slides.js` 문법과 HTML 파일 참조를 확인하고 배포에 필요한 파일만 `dist/`에 복사합니다. 외부 의존성은 없고 Node.js 22 이상을 사용합니다. `dist/`는 Git에서 제외합니다.

`.github/workflows/pages.yml`이 `main` push 또는 수동 실행 시 빌드 후 GitHub Pages에 배포합니다. 주소는 `https://lucidash.github.io/getting-along-with-others-show-and-tell/`입니다.
