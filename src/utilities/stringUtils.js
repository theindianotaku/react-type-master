import _ from 'lodash';
export const trimStringOfPtags = (target) => {

  const trimPtags = target.replace(/(<p[^>]+?>|<p>|<\/p>)/img, " ");

  const trimSpaces = _.trim(trimPtags);

  const toArray = _.split(trimSpaces, ' ').filter((n) => {
    return n !== '\r';
  });

  return toArray;
};
