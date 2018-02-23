import {setTargetText} from '../actions/targetText';
import {trimStringOfPtags} from '../utilities/stringUtils';

const fetchTargetText = () => {
  return (dispatch) => {
    const url = 'http://www.randomtext.me/api/';

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        const trimData = trimStringOfPtags(responseData.text_out);
        
        dispatch(setTargetText(trimData));
      })
      .catch(err => {throw err});
  };
};

export default fetchTargetText;
