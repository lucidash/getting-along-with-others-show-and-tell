# Getting Along with Others — Show & Tell

기존 `wonders-1-4-show-and-tell`과 `wonders-1-4-week5-show-and-tell`의 발표 슬라이드, 영·한 대본, 인쇄용 큐 카드 구성을 바탕으로 만든 새 프로젝트입니다. 최근 `animal-traits-show-and-tell`의 짧은 문장과 조작 방식도 참고했습니다.

- **주제:** Getting Along with Others
- **핵심 질문:** How do good friends act?
- **대상:** 기존 프로젝트와 같은 한국 영어 유치원 6~7세 수준
- **구성:** 8장, 동작과 소품 보여 주기를 포함해 약 2~3분
- **핵심 답:** Good friends are kind. They share, take turns, and help each other.
- **소품:** 색연필 두세 자루, 가능하면 빨간 색연필 포함

## 온라인 발표 자료

- [발표 슬라이드](https://lucidash.github.io/getting-along-with-others-show-and-tell/)
- [발표 대본](https://lucidash.github.io/getting-along-with-others-show-and-tell/script.html)
- [인쇄용 큐 카드](https://lucidash.github.io/getting-along-with-others-show-and-tell/cards.html)

## 파일 구성

| 파일 | 용도 |
|---|---|
| [index.html](index.html) | 그림과 짧은 핵심 표현 중심의 발표 슬라이드 8장 |
| [script.html](script.html) | 영어 발표문, 한국어 뜻, 동작 안내, 예상 질문 |
| [cards.html](cards.html) | 인쇄용 큐 카드 8장과 한 장 요약표 |
| slides.css / slides.js | 슬라이드 화면과 이동 기능 |
| handouts.css | 대본과 큐 카드의 화면·인쇄 스타일 |
| images/ | 발표를 위해 생성한 상황별 삽화 5장 |

## 발표 흐름

| 장 | 내용 | 핵심 표현 |
|---|---|---|
| 1 | 인사와 주제 소개 | How do good friends act? |
| 2 | 실제 색연필 보여 주기 | Draw together |
| 3 | 필요한 색연필 나눠 쓰기 | Good friends share / Here you are! |
| 4 | 그네 차례 기다리기 | Wait for my turn / Your turn! |
| 5 | 떨어진 색연필 함께 줍기 | Help each other |
| 6 | 혼자 있는 친구 초대하기 | Kind words / Come and play! |
| 7 | 핵심 질문에 답하기 | Good friends are kind |
| 8 | 다짐과 마무리 인사 | I can be a good friend, too! |

## 실행과 연습

설치나 서버 없이 HTML 파일을 브라우저에서 열면 됩니다. 이미지, 글꼴, 스크립트에 외부 네트워크 의존성이 없어 인터넷 없이도 사용할 수 있습니다. 자료를 옮길 때는 프로젝트 폴더 전체를 함께 복사하세요.

```bash
cd getting-along-with-others-show-and-tell
open index.html
```

1. `script.html`에서 한 문장씩 뜻과 동작을 함께 연습합니다.
2. `cards.html`의 **큐 카드 인쇄** 버튼을 누릅니다. A4 세로, 배율 100%, 머리글·바닥글 해제를 권장합니다. 카드 4장씩 2페이지와 요약표 1페이지입니다.
3. 색연필을 준비하고 `index.html`에서 **전체 화면** 버튼을 누릅니다.
4. 문장 사이에 잠시 멈추고 그림과 소품을 보여 주며 시간을 재 봅니다. 읽는 속도에 따라 발표 시간은 달라집니다.

### 슬라이드 이동

- `←` / `→`: 이전·다음 장
- `Space` / `PageDown`: 다음 장
- `PageUp`: 이전 장
- `1`~`8`: 원하는 장으로 이동
- `Home` / `End`: 첫 장·마지막 장
- 하단 버튼 또는 모바일에서 좌우로 쓸어 넘기기
- `#slide-3`처럼 주소 끝의 번호로 특정 장을 바로 열 수 있습니다.

## 빌드와 배포

Node.js 22 이상에서 외부 패키지 설치 없이 빌드할 수 있습니다.

```bash
npm run build
```

빌드는 JavaScript 문법과 HTML의 파일 참조를 확인하고, 발표 화면에 필요한 HTML·CSS·JavaScript·삽화만 `dist/`에 복사합니다. 대본과 큐 카드도 포함합니다.

`main` 브랜치에 올리면 GitHub Actions가 같은 빌드를 실행한 뒤 GitHub Pages에 자동 배포합니다. 수동 실행은 저장소의 Actions에서 **발표 자료 빌드 및 배포** 워크플로를 선택하면 됩니다.

## 내용과 삽화

교재의 특정 판본, 유닛, 본문은 제공되지 않아 연결하지 않았습니다. 사용자가 제시한 주제와 핵심 질문에 맞춘 독창적인 발표문입니다. 예시 상황은 발표를 위한 상황 설명이며, 아이의 실제 과거 경험이나 특정 친구 이름을 만들어 넣지 않았습니다.

삽화는 내장 imagegen 도구로 생성한 가상의 교실·놀이터 장면입니다. 실제 인물이나 실제 사건 사진이 아닙니다. 파일별 최종 프롬프트는 [images/prompts.json](images/prompts.json)에 기록했습니다.

내용을 바꿀 때는 슬라이드, 대본, 큐 카드와 요약표를 함께 수정하세요. 준비물이 색연필에서 다른 물건으로 바뀌면 2·3·5장의 표현과 삽화도 맞춰 주세요.
