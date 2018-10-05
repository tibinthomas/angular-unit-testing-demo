import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise #voteChanged event on upVote', () => {
    let valueThatEmitted = null;
    component.voteChanged.subscribe(x => {
      valueThatEmitted = x;
    })

    component.upVote();

    // expect(valueThatEmitted).not.toBeNull();
    expect(valueThatEmitted).toBe(1);
  });
});
