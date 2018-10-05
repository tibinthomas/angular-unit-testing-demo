import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  })

  it('#totalVotes initial value should be 0', () => {
    expect(component.totalVotes).toBe(0);
  })

  it('#upVote should increment the value of #totalVotes by one', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('#downVote should decrement the value of #totalVotes by one', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });

});
