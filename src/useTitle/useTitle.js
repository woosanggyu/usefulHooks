export const useTitle = (initalTitle) => {
    const [title, setTitle] = useState(initalTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector('title');
      htmlTitle.innerText = title
    }
    useEffect(updateTitle, [title])
    return setTitle
  }