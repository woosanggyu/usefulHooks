# This is very useful 10 hooks.

- useState

    >useState 는 Array를 리턴함 첫번째에 item값이 두번째에 setItem이 위치

- useInput

    >useState 는 기본적으로 input을 업데이트하게된다.

- useTabs
    
    >useState를 탭을 이용하여 변경하게 한다. 사용자가 선택한 탭으로 변경

- useEffect
    
    >ComponentDidMount, ComponentDidUpdate, ComponentWillUnMount의 역할을 함.
    2개의 인자를 받으며 첫번째는 function, 두번째는 dependency(deps)로
    두번째 인자 값 deps(array)의 요소가 변경될 때만 useEffect가 실행된다.

- useTitle

    >html 타이틀을 변경하는 hooks

- useRef

    >참조. getelementbyId 등과 같은 의미로 쓸수있음

- useClick

    >useRef와 useEffect를 활용한 onClick eventListener를 추가하는 hooks

  
- usePrevent와 useConfirm은 기본적으로 훅이랄게 없다. 하지만 함수형 프로그래밍에 매우 적합하다. 
  
    > 1. useConfirm
    > - brower에서 경고를 할때 사용(경고창 Alert)
    > 2. usePrevent
    > - 사용자가 페이지를 떠날 때 beforeunload event를 이용해 함수를 실행시키게됌.

- useBeforeLeave

    >mouse cursor가 화면을 벗어날 때 작동됌 (clientY 의 좌표가 0보다 작을때를 사용해서 위로 벗어났을 때 실행).

- useFadeIn
  
    >useRef를 이용해 엘리먼트를 참조하며, 애니메이션을 넣어서 서서히 나타나게 한다.(딜레이도 추가 됌)

- useNetwork

    >network의 상태를 체크하고, 상태가 변하는 것을 감시함.

- useScroll

    >scroll 하는 것을 감지하여, 변화를 줄 수 있음.

- useFullscreen

    >사용자가 버튼을 통해 fullScreen 과 smallscreen모드로 전환할 수 있음(각 브라우저별로 정리)

- useNotification


    >사용자에게 Notification을 보냄, Hook이 아님 함수형 프로그래밍이다.