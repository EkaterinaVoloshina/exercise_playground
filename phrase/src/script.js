const jumbledWords = document.querySelectorAll('#jumbledWordsWrapper > span');
const orderedWords = document.querySelectorAll('#orderedWordsWrapper > span');


jumbledWords.forEach(el => {
  el.addEventListener('dragstart', dragStartHandler);
  el.addEventListener('dragend', dragEndHandler);
})
orderedWords.forEach(el => {
  el.addEventListener('dragenter', dragEnterHandler);
  el.addEventListener('dragover', dragOverHandler);
  el.addEventListener('dragleave', dragLeaveHandler);
  el.addEventListener('drop', dropHandler);
})

function dragStartHandler(e) {
  e.dataTransfer.setData('text', e.target.getAttribute('data-source-id'));
  e.target.style = 'opacity: 0.3';
}
function dragEndHandler(e) {
  e.target.style = 'opacity: 1';
}

function dragEnterHandler(e) {
  e.target.style = 'border: 2px dashed gray; box-sizing: border-box; background: whitesmoke';
}

function dragOverHandler(e) {
  event.preventDefault();
}

function dragLeaveHandler(e) {
  e.target.style = 'border: none; background: #abcdef';
}

function dropHandler(e) {
  e.preventDefault();
  dragLeaveHandler(e); 
  
  const dataSourceId = e.dataTransfer.getData('text'); 
  const dataTargetId = e.target.getAttribute('data-target-id');
  
  if(dataSourceId === dataTargetId) {
    e.target.insertAdjacentHTML('afterbegin', dataSourceId);
    e.target.style = 'border: none; background: #abcdef';
    
    let sourceElemDataId = 'span[data-source-id="' + dataSourceId + '"]';
    let sourceElemSpanTag = document.querySelector(sourceElemDataId);
    
    Object.assign(sourceElemSpanTag, {
      className: 'no-longer-draggable',
      draggable: false,
    });
  }
}

  