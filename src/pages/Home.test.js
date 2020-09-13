import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent } from '@testing-library/svelte';

import Home from './Home.svelte';

describe('Pages/Home', () => {
  test('count increments when button is clicked', async () => {
    const { getByTestId } = render(Home);
    const button = getByTestId('counter-button');

    await fireEvent.click(button);
    expect(button).toHaveTextContent('Count is 1');
  });
});
