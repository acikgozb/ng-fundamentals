import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from "../../shared/event.model";
import {AuthService} from "../../../user/auth.service";
import {VoterService} from "../services/voter/voter.service";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input()
  sessions: ISession[] = [];

  @Input()
  filterBy!: string;

  @Input()
  sortBy!: string;

  @Input()
  eventId!: number;

  filteredSessions: ISession[] = [];

  constructor(
    public authService: AuthService,
    private voterService: VoterService
  ) {
  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  filterSessions(filterBy: string): void {
    if (filterBy === "all") {
      this.filteredSessions = this.sessions.slice(0);
    } else {
      this.filteredSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filterBy);
    }
  }

  sortSessions(sortBy: string): void {
    const targetComparisonFunc = sortBy === "name" ? sortByNameAsc : sortByVotesDesc;
    this.filteredSessions.sort(targetComparisonFunc);
  }

  toggleVote(session: ISession): void {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
    }

    if (this.sortBy === "votes") {
      this.filteredSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  }

  return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
