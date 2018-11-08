import Loadable from "react-loadable";
import { createNotification } from "@utilities";

export default (loader, loading, ...options) =>
  Loadable({
    loader,
    loading: props => {
      if (props.error)
        return createNotification({
          type: "error",
          text: "Something went wrong, please reload the page!"
        });
      else return loading();
    },
    ...options
  });
