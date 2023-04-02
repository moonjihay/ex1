# cafe 리뷰하기

1. flex,float,line-black 가로 나열이 안된다면 position: absolute을 사용한다.<br>

- 위치 : gnb depth02 부분
![문제위치](/cafe/review/capture.PNG)

- 문제 : flex,float,line-black 을 주어도 시안대로 가로정렬리 안되었다. 

- 해결방법 : position을 주어서 가로정령을 했다. 그뒤로 flex을 주어서 가로로 나열했다

```css
header .depth01 .depth01-item .sub {
  font-weight: 400;
  width: 783px;
  position: absolute;
}
header .depth01 .depth01-item .sub .depth02 {
  display: flex;
}
header .depth01 .depth01-item .sub .depth02 .depth02-item + .depth02-item {
  margin-left: 28px;
}
header .depth01 .depth01-item .sub .depth02 .depth02-link {
  display: block;
  height: 60px;
  line-height: 60px;
}
```
---
2. 공통되는 요소는 공통되는 요소만 넣어서 common에 넣어서 일을 줄인다.

- 위치 : css에서 공통적인 요소들을 놓는 common 부분

- 문제 : 시안에서 공통된 요소인 버튼을 부분을 common애 공통된 요소뿐만아니라 한 버튼 모든 부분을 다 common에 넣어서 다른 버튼 스타일에 수정에 문제가 생겼었다.

- 해결방법 : 모든 버튼의 공통된 요소만 common에 넣고 스타일 부분은 각각 버튼에다가 따로 주었다.
---
3. 센션사이에 무조건 패딩을 준다 만약 뒷배경사진때문이라면 부모요소에 줘도 된다.
제일 최고의 부모 header,main,footer 에 주지않으면 된다.

- 위치 : 모든 섹션

- 문제 : 원래 섹션 사이사이 공간을 padding을 줘야하는데 섹션자체의 뒷배경때문에 패딩을 주면 이미지가 늘어나거나 줄어들것같아서 마진을 주었다 하지만 마진을 주면안된다.

- 해결방법 : 제일 최고의 부모 header,main,footer 에만 주지않으면 된다. 그래서 제일 높은 섹션에 배경이 들어가지않는 부모에다가 마진탑을 준다. 

---
4. 과도한 패딩,마진 사용은 좋지않다.

- 위치 : css전체

- 문제 : css하면서 과도하게 마진과 패딩을 무의미하게 사용했다

- 해결방법 : 이미지를 자를때 사이즈에 맞춰서 자른다.
이미지를 맞추려고 무리하게 쓴거다 보니깐 사이즈에 맞춰서 잘라서 마진과 패딩을 과도하게 사용하지말아야한다.

---
5. h2와 h3의 사용할 곳을 잘 생각하고 상용하는게 좋다.

- 위치 : html전체

- 문제 : html을 짜면서 한 섹션 마다 h2로 줘야 tab을 눌렀을때 순서에 맞게 내려간다. 접근성에 맞는다. 잘못된것은 센션안에 2개의 섹션이 들어가게된다

- 해결방법 : 무조건 한 섹션에 h2을 대표 제목으로 넣고 그안에 h3을 넣는다.

---

6. 과도한 uil li 사용는 좋지않다.

- 위치 : html전체(탭부분)

- 문제 : 처음에 접근성을 생각해서 depth01,depth02형식으로 안에다가 넣는 방식으로 했다가 안돼어서 ul과li로 구성된 탭을 제작했다.

- 해결방법 : aria 기법이라고 있다고하지만 검색해보니 ARIA는 HTML을 보충해, 일반적으로 보조 기술이 알 수 없는 상호작용 및 흔히 쓰이는 어플리케이션 위젯에 필요한 정보를 제공하는것같다. 뭔가 자바스크립트같은게 아니까라고 유추해본다. 

```html
<div class="tab_btn on">
  <a href="#" class="tab-link">
    <span>Home baking</span>
  </a>
  <div class="tab-cont">
    <ul class="cont-list">
      <li class="cont-list__item">
        <a href="#" class="cont-link">
          <div class="img-wrap">
            <img src="/img/bestseller1.png" alt="">
          </div>
          <div class="text-box">
            <div class="text-wrap">
              <strong class="title">Home cafe</strong>
              <p class="text">
                집안에서 느낄 수 있는 작은 이탈리아!
              </p>
              <span>116,000원</span>
            </div>
          </div>
        </a>
      </li>
      <li class="cont-list__item">
        <a href="#" class="cont-link">
          <div class="img-wrap">
            <img src="/img/bestseller2.png" alt="">
          </div>
          <div class="text-box">
            <div class="text-wrap">
              <strong class="title">Home cafe</strong>
              <p class="text">
                집안에서 느낄 수 있는 작은 이탈리아!
              </p>
              <span>116,000원</span>
            </div>
          </div>
        </a>
        </li>
        <li class="cont-list__item">
          <a href="#" class="cont-link">
            <div class="img-wrap">
              <img src="/img/bestseller3.png" alt="">
            </div>
            <div class="text-box">
              <div class="text-wrap">
                <strong class="title">Home cafe</strong>
                <p class="text">
                  집안에서 느낄 수 있는 작은 이탈리아!
                </p>
                <span>116,000원</span>
              </div>
            </div>
          </a>
        </li>
        <li class="cont-list__item">
          <a href="#" class="cont-link">
            <div class="img-wrap">
              <img src="/img/bestseller4.png" alt="">
            </div>
            <div class="text-box">
              <div class="text-wrap">
                <strong class="title">Home cafe</strong>
                <p class="text">
                  집안에서 느낄 수 있는 작은 이탈리아!
                </p>
                <span>116,000원</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
```
로 gnb처럼 만들었다.

---
7. 그리고 모든 요소에 클래스 네임을 줘야한다.

- 위치 : html전체

- 문제 : html 짤때 클래스 네임을 다주지않았다.

- 해결방법 : 잊지말고 꼭 모든 요소에 클래스 네임을 주어야한다.

---

8. 손자태그가 많을때는 노가대신은 제일 큰 부모에게 가로값을 준다.

- 위치 : css전체
 
- 문제 : 여러 자식요소 ul,li나div 일일히 노가다로 가로값 주었다.

- 해결방법 : 이번시안처럼 ul,li나div을 많이쓰면 자식요소가 많기때문에 일일이 한요소마다 주면 안된다. 큰 부모요소에 한번에 줘야한다.

---

9. 시안 가이드가 표시한만큼 높이값을 잡는다.

- 위치 : css전체

- 문제 : 높이값이 이상하고 맞지않았다.

- 해결방법 : 시안만큼 딱주면된다.

---

10. 높이값을 잡았다면 맨 위에 애매하게 떨어진 영역에는
padding-top을 준다

- 위치 : css전체

- 문제 : 시안처럼 딱떨어지는 모습이 안나온다.

- 해결방법 : 9번에 시안가이드만큼 높이값을 잡고나서 아매한 영역엔느 패딩탑을 준다

---

11. a태그로 감싸진거는 패딩을 주면 그 패딩 주었던 부분은 클릭안먹힌다.

- 위치 : css전체

- 문제 : main-vis부분에서 이미지가 a태그로되어있는데 패딩을 주었다. 하지만 a태그에 감사진거에 패딩을 주면 클릭이 안된다. 

- 해결방법 : 패딩이 아니라 마진을 주면 된다.

---

12. 패딩탑 h2에 주면안됀다

- 위치 : css 전체

- 문제 : css h2에다가 패딩탑을 주었다.

- 해결방법 : h2는 패딩탑을 주면 안되고 줄거면 마진으로 주는게 좋다.

---

13. service은 푸터에 주는게 좋다.

- 위치 : html service부분

- 문제 : html 짤때 service부분을 하나의 섹션으로 메인에 주었다. 

- 해결방법 : service는 내용은 안에 cs나 배송관련내용이므로 푸터에 넣어야하는게 좋다.

---
