import React from 'react';
import '../assets/Rule-book.css'


const Docs = () => {
    return (
        <div className='tc'>
        <br /><br /><br /><br />
        <h1>
            Here are the official league rules for Online Team Cup (OTC). <br />These rules may be revised before the league starts.
        </h1>
        <div className='fl w-50 pa2'>
            <h1 className='header'>
            Team Captain Requirements:
            </h1>
            <h1 className='body'>
            All team Captains must:<br />

1. Recruit teammates and manage your team. You are in charge of finding substitutes (see below for more info for substitutes<br />

2. Make a team name no more than 32 characters wide (spaces included), a team logo. *Optional* choose background coloring and lettering for your team's pairings and result threads<br />

3. Make your team's private club (so you can announce when they should play)<br />

4. Be active!! Otherwise someone else from your team will be given the team captain spot. As a team captain, your job is to keep your team in check and find substitutes when needed.<br />

5. All player requirements (see below) apply to Team Captains as well.<br />
        </h1>
        </div>

        <div className='fl w-50 pa2'>
            <h1 className='header'>
            Player Requirements:
            </h1>
            <h1 className='body'>
            All players must <br />

1. register by filling out the official registering form.<br />

2. Have an account that is at least 3 months old<br />

3. Have played 25 blitz games against 20 different human players. Playing BOTs don't count.<br />

4. Register with your correct peak blitz rating after 25 blitz games. All all ratings will be checked to be sure.<br />

5. Follow the rules and negotiate with your opponent, as well as posting your results. Make sure your result thread inputs look like this:<br />

@(Your username) (Your team) vs @(Opponent's username) (Opponent's team) (X-X)<br />

(Links to games)


        </h1>
        </div>

        <div className='fl w-50 pa2'>
            <h1 className='header'>
            Substitutes:
            </h1>
            <h1 className='body'>
            1. All substitutes must follow the player rules (see above)<br />

            2. All substitutes must be reported to an SA within the first 48 hours of the playing week. Failure to do so will result in an illegal sub.<br />

            3. If a substitute plays for a team for 2 or more weeks then they cannot substitute for another team, even in the playoffs.<br />

            4. The average rating of a team still cannot surpass 1700. So don't try to increase and cheat your average above that line. All teams will be checked for errors.<br />
            </h1>
        </div>

        <div className='fl w-50 pa2'>
            <h1 className='header'>
            Format:
            </h1>
            <h1 className='body'>
            There will be 8 teams playing in the league, with 4 players on each team. The average of each team cannot surpass 1700. (Note that we're using the peak rating of each player). 
            Team captains are responsible for asking questions for their team.
            </h1>
        </div>

        <div className='fl w-50 pa2'>
            <h1 className='header'>
            Time Control: 
            </h1>
            <h1 className='body'>
            2 games of 3|2 (1 white and 1 black) and 2 games of 5|0 (1 white and 1 black). These games will average to about half an hour of play time, so make sure you are taking this into consideration when negotiating.
            </h1>
        </div>

        <div className='fl w-50 pa2'>
            <h1 className='header'>
            Negotiation:
            </h1>
            <h1 className='body'>
            Players need to state what time they are free in their own negotiation thread. If your opponent hasn't negotiated 72 hours straight it will be considered a forfeit win. <br />
            If your opponent doesn't show up at the agreed time, that will count as one no show. You still find time to play all 4 of your games however. 2 consecutive no-shows will result in all your games a forfeit.
             A no-show is counted as 20 minutes after agreed time.
           </h1>
        </div>

        <div className='fl w-50 pa2'>
            <h1 className='header'>
            Tiebreaks:
            </h1>
            <h1 className='body'>
            Tiebreaks for teams go as follows:<br />

1. Game Points (GP). Each game is counted as one point. 
Whoever wins the game gets the point.<br />

2. Least Forfeit Losses (FL). The less of these you have, the better.
 Forfeits will count badly for your team, because we want everyone to be as active as possible.<br />
            </h1>
        </div>

        <div>
            <h1 className='header'>
            Playoffs:
            </h1>
            <h1 className='body'>
            The Top 2, 3, or 4 teams of the league qualify for the playoffs. The format is the same as the regular season, and all above rules apply. It will be single-elimination knockout so 1 loss and your team is out.
              Here are a few differences between regular season and playoffs.<br />

1. A substitute player cannot substitute for another team in the playoffs if they have played for a team that has made the playoffs, even just once.<br />

2. All playoff arguments are not to be judged by anyone but the SAs.<br />

3. If a tie is played in a playoff matchup then the Board 1 result will decide the winning team. If there was a 2-2 on board 1, then let Board 2 decide and so on.<br />
            </h1>
        </div>

        <div >
            <h1 className='header'>
            Arguing:
            </h1>
            <h1 className='body'>
            1. Arguments will be decided by an SA.<br />

2. If there is anything worth mentioning (dispute, gameplay, substitutes, cheating) please PM any of the SAs.<br />

3. Resolving arguments is final by any of the SAs.<br />
            </h1>
        </div>
        <h1 >
        If a player breaks any of the rules, or is found to be cheating, he will be disqualified from the league for the whole season.
        </h1>

        </div>
    );
}

export default Docs;