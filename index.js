function selectCard(card, unit) {
    document.querySelectorAll('.card').forEach(el => {
      el.querySelector('input[type=radio]').checked = false;
      el.classList.remove('selected');
      el.querySelector('.selectors')?.classList.remove('show');
    });
    card.querySelector('input[type=radio]').checked = true;
    const selectors = document.getElementById(`selectors-${unit}`);
    if (selectors) selectors.classList.add('show');
  }