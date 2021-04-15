# usefulHooks
This is very useful 10 hooks.

- useState

    >useState 는 Array를 리턴함 첫번째에 item값이 두번째에 setItem이 위치

- useInput

    >useState 는 기본적으로 input을 업데이트하게된다.

- useTabs
    
    >useState를 탭을 이용하여 변경하게 한다. 사용자가 선택한 탭으로 변경

-  useEffect
    
    >ComponentDidMount, ComponentDidUpdate, ComponentWillUnMount의 역할을 함.
    2개의 인자를 받으며 첫번째는 function, 두번째는 dependency(deps)로
    두번째 인자 값 deps(array)의 요소가 변경될 때만 useEffect가 실행된다.