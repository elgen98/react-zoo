export const imageOnErrorHandler = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src =
    "https://cdn2.iconfinder.com/data/icons/symbol-blue-set-3/100/Untitled-1-94-512.png";
};
