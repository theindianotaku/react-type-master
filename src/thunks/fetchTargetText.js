import {setTargetTextSuccess, setTargetHasErrored, setTargetIsLoading} from '../actions/targetText';
import {trimStringOfPtags} from '../utilities/stringUtils';

const fetchTargetText = () => {
  return (dispatch) => {
    const url = 'https://www.randomtext.me/api/gibberish/p-2/9-11';
    dispatch(setTargetIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(setTargetIsLoading(false));
        return response;
      })

      .then((response) => response.json())

      .then((responseData) => {
        const trimData = trimStringOfPtags(responseData.text_out);

        dispatch(setTargetTextSuccess(trimData));
      })

      .catch(() => dispatch(setTargetHasErrored(true)));
  };
};

export default fetchTargetText;
