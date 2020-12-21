해당 README 파일을 RAW형태로 보기를 추천합니다
# JSprojcet
1-2학기 자바스크립트 기말과제
기능 구현 정도 : 4-나까지 구현


JSproject 폴더의 index.html을 클릭하여 프로그램 실행

간단한 프로그램 소개
  마일리지와 전화번호를 각각 버튼을 눌러 입력받음
  '저장' 버튼을 눌러 로컬저장소에 저장하고 '저장' 버튼에 마우스를 가져다대면 저장된 날짜/시간/해당전화번호/마일리지정보를 메시지형태로 볼수있고,
  하단의 표 형태로도 볼수있음
  
버튼 설명
  - 공통되는 기능
    * 버튼에 마우스를 올려놓으면 해당 버튼의 기능을 메시지형태로 확인가능
    
  - 마일리지
    ＊ 1000~100000까지의 랜덤한 숫자가 버튼을 누를때마다 input창에 출력
    ＊ 천단위의 자리에 ',' 표시
    ＊ 버튼에 마우스를 올려놓으면 해당 버튼의 기능을 메시지형태로 확인가능
    
  - 숫자키패드
    ＊ 1 ~ 9의 숫자, 뒤에서 부터 하나씩 지우는 x, 숫자 전체를 다 지우는 c로 이루어져 있음
    ＊ 전화번호 형식에 맞춰서 '-'을 자동으로 붙여줌
    ＊ 버튼입력시 해당값을 input창에 표시
    
  - 저장
    ＊ 마일리지, 전화번호가 들어있는 input창의 값을 로컬스토리지에 저장
       ※ 한개의 전화번호당 2개의 키가 저장되는데
          하나는 마일리지, 누적횟수, 저장시간이 저장되고
          다른 하나는 그 전화번호의 마일리지 총 합이 저장된다
    ＊ 성공적으로 로컬스토리지에 저장이 된 이후 저장 버튼에 마우스를 올리면 저장된 값의 정보가 메시지형태로 확인 가능
    ＊ 마일리지없이 저장버튼을 누를 시 오류메시지 출력
    ＊ 전화번호없이 저장버튼을 누를 시 오류메시지 출력
    
  - 데이터 초기화
    ＊ 현재 로컬스토리지에 저장되어있는 모든 정보를 삭제
    
  - 표 지우기
    ＊ 버튼을 누를때마다 표의 제일 상단의 행을 삭제

 
