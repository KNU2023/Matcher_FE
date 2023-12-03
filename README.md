# Matcher_FE

![gif용](https://github.com/KNU2023/Matcher_FE/assets/48755156/571cdc3a-5e46-4dad-9f2b-12a38a3f8817)

- Issue 생성

  - 제목에 어떤 것을 수정할 것인지 기재
  - 체크 리스트를 만들어 수정할 내용들을 리스트로 명확히 표시
  - Assignees, Labels, Projects 지정
  - 브랜치를 만드는 경우, branch name convention을 따를 것
    - branch name convention: Label/issue-issuenumber
      ```
      feat/issue-19
      ```
      
- Commit
  - 커밋 시 commit message convention을 따를 것
    - `[type]: comment`
    - type - 각 commit의 성격을 나타내며, 아래 중 하나여야 함. 대문자로 시작
      ```
      Feat: 새로운 기능에 대한 커밋
      Fix: build 빌드 관련 파일 수정에 대한 커밋
      Build: 빌드 관련 파일 수정에 대한 커밋
      Chore: 그 외 자잘한 수정에 대한 커밋 (기타 변경)
      Ci: CI 관련 설정 수정에 대한 커밋
      Docs: 문서 수정에 대한 커밋
      Style: 코드 스타일 혹은 포맷 등에 관한 커밋
      Refactor: 코드 리팩토링에 대한 커밋
      Test: 테스트 코드 수정에 대한 커밋
      ```

- Pull request
  - 제목은 branch name convention을 따를 것
    ```
    feat/issue-19
    ```
  - Reviewers, Assignees, Labels, Projects 지정
  - 맨 첫째 줄에 close 명령어와 issue 번호 남기기
  - 두 번째 줄부터 변경 사항 개조식으로 작성
    ```
    close #19
     - 헤더, 푸터
     - 프로필 영역
     - 레벨 영역
     - 리워드 / 리포트 버튼 영역
     - 매거진 영역
    ```
  - merge 하기 전 deploy 단계에서 오류가 나지 않는지 반드시 확인
  - 정상적으로 merge가 완료되었다면, Issue에 대응하기 위해 사용했던 branch 삭제
