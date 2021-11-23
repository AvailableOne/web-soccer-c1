import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[]=[
  {id:1,PlayingDate:new Date(2021,8,10),HomeTeam:'Persija',AwayTeam:'Persib',
  HomeScore:3,AwayScore:2,RefName:'Simic',Notes:'Overtime'},
  {id:2,PlayingDate:new Date(2021,8,10),HomeTeam:'EVOS',AwayTeam:'RRQ',
  HomeScore:3,AwayScore:2,RefName:'KB',Notes:'Overtime'},
  {id:3,PlayingDate:new Date(2021,8,10),HomeTeam:'Onic',AwayTeam:'AE',
  HomeScore:3,AwayScore:2,RefName:'PULUNG',Notes:'Overkill'},
  {id:4,PlayingDate:new Date(2021,8,10),HomeTeam:'GEEK',AwayTeam:'TODAK',
  HomeScore:3,AwayScore:2,RefName:'Kornet',Notes:'Overtime'},
  {id:5,PlayingDate:new Date(2021,8,10),HomeTeam:'Blacklist',AwayTeam:'SMG',
  HomeScore:3,AwayScore:2,RefName:'Clara',Notes:'Overtime'},
  {id:6,PlayingDate:new Date(2021,8,10),HomeTeam:'Rebellion',AwayTeam:'Aura',
  HomeScore:3,AwayScore:2,RefName:'Om Wawa',Notes:'Overtime'},
  {id:7,PlayingDate:new Date(2021,8,10),HomeTeam:'EVOS SG',AwayTeam:'ECNO',
  HomeScore:3,AwayScore:2,RefName:'GIO',Notes:'Overtime'},
]
export const Teams:Team[]=[
  {id:1,name:'Persija',type:'Klub lokal'},
  {id:2,name:'EVOS',type:'Klub lokal'},
  {id:3,name:'Onic',type:'Klub lokal'},
  {id:4,name:'GEEK',type:'Klub lokal'},
  {id:5,name:'Blacklist',type:'Klub Internasional'},
  {id:6,name:'Rebellion',type:'Klub lokal'},
  {id:7,name:'EVOS SG',type:'Klub Internasional'},
]
