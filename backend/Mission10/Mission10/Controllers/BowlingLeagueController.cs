using Mission10.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace Mission10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlersController : ControllerBase
    {
        private BowlingLeagueContext _bowlingLeagueContext;

        public BowlersController(BowlingLeagueContext context)
        {
            _bowlingLeagueContext = context;
        }

        [HttpGet]
        public IActionResult GetBowlers()
        {
            var bowlers = _bowlingLeagueContext.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .Select(b => new
                {
                    b.BowlerId,
                    BowlerName = b.BowlerFirstName + " " + b.BowlerMiddleInit + " " + b.BowlerLastName,
                    TeamName = b.Team.TeamName,
                    b.BowlerAddress,
                    b.BowlerCity,
                    b.BowlerState,
                    b.BowlerZip,
                    b.BowlerPhoneNumber
                })
                .ToList();

            return Ok(bowlers);
        }
    }
}