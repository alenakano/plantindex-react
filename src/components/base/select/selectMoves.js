export function activateSelect() {
  var select, i, j, l, selectLength, selectElement, a, b, c;
  /*look for any elements with the class "custom-select":*/
  select = document.getElementsByClassName("custom-select");
  l = select.length;
  for (i = 0; i < l; i++) {
    selectElement = select[i].getElementsByTagName("select")[0];
    selectLength = selectElement.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.getElementById("selected");
    // a.setAttribute("onChange", "() => console.log('oioioi')");
    // a.setAttribute("class", "custom-select__selected");
    a.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    select[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.getElementById("select-options");
    // b.setAttribute("class", "custom-select__options custom-select__options--hide");
    for (j = 1; j < selectLength; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.setAttribute("class", "custom-select__option");
      c.innerHTML = selectElement.options[j].innerHTML;
      c.setAttribute('value', selectElement.options[j].getAttribute('value'));
      c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML === this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("custom-select__option--selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                let olderSelected = y[k];
                olderSelected.removeAttribute("class");
                olderSelected.setAttribute("class", "custom-select__option")
              }
              this.setAttribute("class", "custom-select__option--selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    select[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("custom-select__options--hide");
        this.classList.toggle("custom-select__selected--active");
      });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var select, y, i, selectl, yl, arrNo = [];
    select = document.getElementsByClassName("custom-select__options");
    y = document.getElementsByClassName("custom-select__selected");
    selectl = select.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt === y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("custom-select__selected--active");
      }
    }
    for (i = 0; i < selectl; i++) {
      if (arrNo.indexOf(i)) {
        select[i].classList.add("custom-select__options--hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
}
export function destroySelect() {
  const selected = document.querySelector('#selected');
  const selectOption = document.querySelector('#select-options');
  if (selected) selected.remove();
  if (selectOption) selectOption.remove();
}