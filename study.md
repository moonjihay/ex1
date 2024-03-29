# 정리노트

## 단축키

- .p 하면  ```<div class="p"></div>```
- p. 하면  ```<p class=""></p>```
- 주석처리 : ctrl +/ 
- 주석해체 : ctrl +/
- 여러개 태그 한번에 수정 : 클래스 클릭 + ctrl + (alt)
- 여러개 태그 한번에 수정(css) : 클래스 클릭 + ait + ctrl
- Lorem ipsum 자동생성 : cmd / ctrl+shift+p
- 검색/ 찾기 : ctrl + f
- 같은 태그 복사 : alt + shift + ↓

---
## 브라우저 모든창에 이미지 보이기

- 상대경로가 아닌 절대경로러 넣어야 보인다. <br>
(절대경로라고 넘 맹신하진 말고 걍 글쿠나~~ 하는 정도)

```html
  <img src="img/logo.png" alt="상대경로">
  <img src="https://~~~.png" alt="절대경로">
  <!-- 절대경로는 인테넷에 올린 이미지이다-->
 ```

---
## 가로정렬 (엘리먼트)

1. float
2. display : linline 
3. display : flex

### - float

복잡한 다양한 형태의 레이아웃을 구성하는데 필요한 핵심 속성으로 특정 요소를 떠있게, 흐르도록, 부유하게 하도록 하는 속성이다

float 속성을 사용해 박스를 왼쪽(left) 또는 오른쪽(right)으로 "부유"시키는 레이아웃 기법이다.

요소가 기본적인 문서 배치의 흐름에서 벗어나 요소의 모서리가 페이지의 왼쪽이나 오른쪽으로 이동한다.


\* float는 위로 붕뜨아래의 요소가 위로 올라가는 일로 문서의 흐름상에서 벗어난 상태이기 때문에 레이아웃을 무너뜨리게 되는 현상생기겠다.

clear 속성을 적용해 float을 해체해서 float 의 영향을 받지 않도록 한다.

- CSS 를 통해 빈 가상 요소를 생성하여 float 을 해제하는 방법입니다.
- CSS 의 가상 요소 중에 :after 를 이용합니다.

```CSS
.float:after {
     content: "";
     display:block;/* 또는 inline-block */
     clear:both;
}
```

### - display : linline  

display 속성이 inline으로 지정된 엘리먼트는 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치한다. 

\* 대표적인 inline 엘리먼트로 ```<span>, <a>, <em>``` 태그 등을 들 수 있다.

### - display : flex

flex는 유연성을 뜻으로 요소들을 자유자제로 위치시키는 속성이다. 이 속성을 통해 동적으로 변경가능한 순서를 지정할 수 도 있고, 가용한 공간내에서 크기와 위치를 자동으로 조정 한다.

> flex는 부모요소인 flex container와 자식 요소인 flex item 으로 구성된다.<br>
여기서 flex container가 flex 태그의 영향을 받는 공간이고, 그안에서 flex item들의 배치, 정령이 설정된 속성에 따라 변경되는 것이다.
\* flex는 기본적으로 엘리먼트를 정렬하면서 display : block 가 내장되어있다.

----

## 인접형제 선택자

- 두번째 형제부터 적용된다
- ```first-child , last-child```을 사용안해도 된다.

```css
.test + .test {cloor:#303030}
```

----

## 라인헤이트 계산법(폰트고유크기)
폰트기준으로 계산해서 여백위에 마진을 준다.

1. 폰트 크기를 본다.
2. 실제값 높이를 잰다.
3. 1번 - 2번 값을 구한다
4. 1번과 2번을 뺀 3번의 값을 나눈다.
5. 4번에 나온값을 폰트 위에 아래 넣는다.

\- 모든 폰트에 라인헤이트가 골고루붙여있지않다 그래서 완벽한 계산이 없다. line-heigh 값이 있을시 line-heigh으로 계산 <br>
\- 그렇기에 이제는 라인헤이트로 계산말고 웹상에서 폰트를 드래그해서 여백부분을 캡쳐해서 얼만큼 차이나는지 봐야한다.

1. line-heigh 값 [ ex) 28px ]
1. 실제폰트사이즈 사이즈 확인 [ ex) 18px ]
1. line-heigh - 실제폰트사이즈 값 구하기 [ ex) 28-18 = 10px ]
1. 3번째 나온 값을 나누기 2 한다 [ ex) 10 ÷ 2 = 5px ]
1. 폰트위아래에 나눈값을 붙인다.

> rest css<br>
```line-height :1em;```
을 준다.(실제 자간만큼이라는 의미)

---

## min/max - width (미디어 쿼리)

- min-width(최소 width) → 최소 이상에 적용
- max-width(최대 width) → 최소 이하에 적용

> min-width → 적은값보다 더 클때 <br>
max-width → 적은값보다 더 작을때
---

## nth-child

nth-child 의사 클래스는 형제의 중에서 선택하려는 엘리먼트를 정해서 스타일 효과를 준다.

- odd : 형제 요소에서 홀수번째(1, 3, 5, ...)
- even : 형제 요소에서 짝수번째(2, 4, 6, ...)
> odd은 2n+1으로 대처가능합니다.<br> even은 2n으로 대처가능합니다.

---

## margin / padding 

- margin  : 요소 주변의 여백 공간을 의미한다. 
마진을 조절하면 현재 요소와 다른 요소간의 공간을 조절할 수 있다.<br> 
\* 밖에서 미는것
- padding  : 콘텐츠와 테두리 사이의 여백 공간이다.<br>
\* 안에서 채워서 미는것