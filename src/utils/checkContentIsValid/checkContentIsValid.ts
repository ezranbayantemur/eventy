function checkContentIsValid(dataField: any): boolean {
  if (typeof dataField !== 'string') {
    return false;
  }

  if (dataField === '&nbsp;' || dataField === '<br />' || dataField === '') {
    return false;
  }

  return true;
}

export default checkContentIsValid;
