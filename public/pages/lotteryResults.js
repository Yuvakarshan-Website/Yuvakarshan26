export default function LotteryResults() {
  const container = document.createElement('div');
  container.className = 'lottery-page';

  container.innerHTML = `
    <div class="homeBg"></div>
      <section class="noticeBoardContainer">
        <div class="YuvaHist Title Headers">LOTTERY RESULTS</div>

        <div class="notice-container result">
          <div class="lottery">
              <h1 class='heading'> XPORT.EXE </h1>

              <table class="table">
              <thead>
              <tr>
                  <th>School</th>
                  <th>Allotment</th>
              </tr>
              </thead>
              <tbody>
                  <tr><td>Calcutta Boys' School</td><td>Mexico × FinTech (Credit / Lending)</td></tr>
                  <tr><td>Calcutta Girls' High School</td><td>Spain × Tourism & Hospitality Tech</td></tr>
                  <tr><td>Calcutta International School</td><td>Ethiopia × Telecom & Connectivity</td></tr>
                  <tr><td>Delhi Public School Megacity</td><td>Vietnam × Manufacturing as Industry 4.0</td></tr>
                  <tr><td>Delhi Public School Ruby Park</td><td>Saudi Arabia × EdTech</td></tr>
                  <tr><td>Indus Valley World School</td><td>Kenya × Wildlife Economy & Conservation Markets</td></tr>
                  <tr><td>Mangalam Vidya Niketan</td><td>Nigeria × Supply Chain Logistics</td></tr>
                  <tr><td>Methodist School Dankuni</td><td>Italy × Construction / Infra Tech</td></tr>
                  <tr><td>Narayana School</td><td>Morocco × Port & Logistics Tech</td></tr>
                  <tr><td>National English School Baguihati</td><td>Russia × Enterprise SaaS</td></tr>
                  <tr><td>National English School Rajarhat</td><td>Indonesia × E-commerce Logistics</td></tr>
                  <tr><td>Shri Shikshayatan School</td><td>Japan × Elder Care Tech/Service</td></tr>
                  <tr><td>Sri Ram Narayan Singh Memorial School Rajdanga</td><td>United Arab Emirates × Water Security & Desalination Systems</td></tr>
                  <tr><td>St. Augustine's Day School Barrackpore</td><td>Egypt × Mobility / Ride-Hailing</td></tr>
                  <tr><td>St. Augustine's Day School Shyamnagar</td><td>New Zealand × Modular & Prefabricated Construction Systems</td></tr>
                  <tr><td>St. Francis Xavier School</td><td>France × HealthTech / Medical Devices</td></tr>
                  <tr><td>St. John's Diocesan Girls' H.S. School</td><td>Norway × Maritime Autonomy Ocean Tech</td></tr>
              </tbody>
              </table>
          </div>
      </div>

      <div class="notice-container result">
        <div class="lottery">
            <h1 class='heading'> RUNWAY.PROTOCOL </h1>

            <table class="table">
            <thead>
            <tr>
                <th>School</th>
                <th>Allotment</th>
            </tr>
            </thead>
            <tbody>
                <tr><td>Calcutta Boys' School</td><td>Ocean</td></tr>
                <tr><td>Calcutta Girls' High School</td><td>Stars</td></tr>
                <tr><td>Calcutta International School</td><td>Lightning</td></tr>
                <tr><td>Delhi Public School Megacity</td><td>Ice</td></tr>
                <tr><td>Delhi Public School Ruby Park</td><td>Clouds</td></tr>
                <tr><td>Indus Valley World School</td><td>Sand</td></tr>
                <tr><td>Mangalam Vidya Niketan</td><td>Aqua</td></tr>
                <tr><td>Methodist School Dankuni</td><td>Flowers</td></tr>
                <tr><td>Narayana School</td><td>Metal</td></tr>
                <tr><td>National English School Baguihati</td><td>Sun</td></tr>
                <tr><td>National English School Rajarhat</td><td>Mist</td></tr>
                <tr><td>Shri Shikshayatan School</td><td>Caves</td></tr>
                <tr><td>Sri Ram Narayan Singh Memorial School Rajdanga</td><td>Fire</td></tr>
                <tr><td>St. Augustine's Day School Barrackpore</td><td>Moon</td></tr>
                <tr><td>St. Augustine's Day School Shyamnagar</td><td>Pearls</td></tr>
                <tr><td>St. Francis Xavier School</td><td>Aurora</td></tr>
                <tr><td>St. John's Diocesan Girls' H.S. School</td><td>Earth</td></tr>
                <tr><td>The Assembly of God Church School Tollygunge</td><td>Lava</td></tr>
                <tr><td>The Heritage School</td><td>Mountain</td></tr>
                <tr><td>The Newtown School</td><td>Space</td></tr>
                <tr><td>Delhi Public School Newtown</td><td>Darkness</td></tr>
            </tbody>
            </table>
        </div>
    </div>

    <div class="notice-container result">
        <div class="lottery">
            <h1 class='heading'> RHYTHM.RAPTURE </h1>

            <table class="table">
            <thead>
            <tr>
                <th>School</th>
                <th>Allotment</th>
            </tr>
            </thead>
            <tbody>
                <tr><td>Calcutta Boys' School</td><td>Silent Cinema</td></tr>
                <tr><td>Calcutta Girls' High School</td><td>Ragnarök</td></tr>
                <tr><td>Calcutta International School</td><td>Celestial</td></tr>
                <tr><td>Delhi Public School Megacity</td><td>Materialistic</td></tr>
                <tr><td>Delhi Public School Ruby Park</td><td>Everbloom</td></tr>
                <tr><td>Indus Valley World School</td><td>House</td></tr>
                <tr><td>Mangalam Vidya Niketan</td><td>Carnival</td></tr>
                <tr><td>Methodist School Dankuni</td><td>Rebellion</td></tr>
                <tr><td>Narayana School</td><td>Swagger</td></tr>
                <tr><td>National English School Baguihati</td><td>Tale</td></tr>
                <tr><td>National English School Rajarhat</td><td>Metamorphosis</td></tr>
                <tr><td>Shri Shikshayatan School</td><td>Y2K</td></tr>
                <tr><td>Sri Ram Narayan Singh Memorial School Rajdanga</td><td>Cyberpunk</td></tr>
                <tr><td>St. Augustine's Day School Barrackpore</td><td>Lovelore</td></tr>
                <tr><td>St. Augustine's Day School Shyamnagar</td><td>Masquerade</td></tr>
                <tr><td>St. Francis Xavier School</td><td>Disco</td></tr>
                <tr><td>St. John's Diocesan Girls' H.S. School</td><td>Vintage</td></tr>
                <tr><td>The Assembly of God Church School Tollygunge</td><td>Horror</td></tr>
                <tr><td>The Heritage School</td><td>Electric</td></tr>
                <tr><td>The Newtown School</td><td>Olympus</td></tr>
                <tr><td>Delhi Public School Newtown</td><td>Futuristic</td></tr>
            </tbody>
            </table>
        </div>
    </div>        

    <div class="notice-container result">
        <div class="lottery">
            <h1 class='heading'> MARKET.MAKE [PRODUCTS] </h1>

            <table class="table">
            <thead>
            <tr>
                <th>School</th>
                <th>Allotment</th>
            </tr>
            </thead>
            <tbody>
                <tr><td>Calcutta Boys' School</td><td>Camera</td></tr>
                <tr><td>Calcutta Girls' High School</td><td>DVD</td></tr>
                <tr><td>Calcutta International School</td><td>Calculator</td></tr>
                <tr><td>Delhi Public School Megacity</td><td>Toaster</td></tr>
                <tr><td>Delhi Public School Ruby Park</td><td>Protein powder</td></tr>
                <tr><td>Indus Valley World School</td><td>Raincoat</td></tr>
                <tr><td>Mangalam Vidya Niketan</td><td>Hair conditioner</td></tr>
                <tr><td>Methodist School Dankuni</td><td>Mosquito bats</td></tr>
                <tr><td>Narayana School</td><td>Thermos flasks</td></tr>
                <tr><td>National English School Baguihati</td><td>Thermometer</td></tr>
                <tr><td>National English School Rajarhat</td><td>Super glue</td></tr>
                <tr><td>Shri Shikshayatan School</td><td>Ice cream</td></tr>
                <tr><td>Sri Ram Narayan Singh Memorial School Rajdanga</td><td>Radio</td></tr>
                <tr><td>St. Augustine's Day School Barrackpore</td><td>Toothpaste</td></tr>
                <tr><td>St. Augustine's Day School Shyamnagar</td><td>Anti ageing cream</td></tr>
                <tr><td>St. Francis Xavier School</td><td>Keypad phone</td></tr>
                <tr><td>St. John's Diocesan Girls' H.S. School</td><td>Virtual assistant (like Alexa)</td></tr>
                <tr><td>The Assembly of God Church School Tollygunge</td><td>Smart watch</td></tr>
                <tr><td>The Heritage School</td><td>Trolley bag</td></tr>
                <tr><td>The Newtown School</td><td>Microphone</td></tr>
                <tr><td>Delhi Public School Newtown</td><td>Hair straightener</td></tr>
            </tbody>
            </table>
        </div>
    </div>    

    <div class="notice-container result">
        <div class="lottery">
            <h1 class='heading'> MARKET.MAKE [HISTORICAL ERA] </h1>

            <table class="table">
            <thead>
            <tr>
                <th>School</th>
                <th>Allotment</th>
            </tr>
            </thead>
            <tbody>
                <tr><td>Calcutta Boys' School</td><td>Edwardian era</td></tr>
                <tr><td>Calcutta Girls' High School</td><td>Belle Epoque</td></tr>
                <tr><td>Calcutta International School</td><td>Bengal Renaissance</td></tr>
                <tr><td>Delhi Public School Megacity</td><td>French Revolution Era</td></tr>
                <tr><td>Delhi Public School Ruby Park</td><td>Zamindari Bengal</td></tr>
                <tr><td>Indus Valley World School</td><td>Ancient Rome</td></tr>
                <tr><td>Mangalam Vidya Niketan</td><td>Maratha Empire</td></tr>
                <tr><td>Methodist School Dankuni</td><td>British Colonial India</td></tr>
                <tr><td>Narayana School</td><td>Mughal Empire</td></tr>
                <tr><td>National English School Baguihati</td><td>Later Vedic age</td></tr>
                <tr><td>National English School Rajarhat</td><td>Nawabi Bengal</td></tr>
                <tr><td>Shri Shikshayatan School</td><td>Italian renaissance</td></tr>
                <tr><td>Sri Ram Narayan Singh Memorial School Rajdanga</td><td>Ancient egypt</td></tr>
                <tr><td>St. Augustine's Day School Barrackpore</td><td>Swadeshi Movement Era</td></tr>
                <tr><td>St. Augustine's Day School Shyamnagar</td><td>Gupta Dynasty</td></tr>
                <tr><td>St. Francis Xavier School</td><td>Stone age</td></tr>
                <tr><td>St. John's Diocesan Girls' H.S. School</td><td>Early Vedic Age</td></tr>
                <tr><td>The Assembly of God Church School Tollygunge</td><td>Delhi Sultanate</td></tr>
                <tr><td>The Heritage School</td><td>Ancient Greece</td></tr>
                <tr><td>The Newtown School</td><td>Rajput Kingdoms</td></tr>
                <tr><td>Delhi Public School Newtown</td><td>Elizabethan Era</td></tr>
            </tbody>
            </table>
        </div>
    </div>    

    <div class="notice-container result">
        <div class="lottery">
            <h1 class='heading'> IM.PROVEX </h1>

            <table class="table">
            <thead>
            <tr>
                <th>School</th>
                <th>Allotment</th>
            </tr>
            </thead>
            <tbody>
                <tr><td>Calcutta Boys' School</td><td>Magic</td></tr>
                <tr><td>Calcutta Girls' High School</td><td>Mayhem</td></tr>
                <tr><td>Calcutta International School</td><td>Mayhem</td></tr>
                <tr><td>Delhi Public School Megacity</td><td>Magic</td></tr>
                <tr><td>Delhi Public School Ruby Park</td><td>Magic</td></tr>
                <tr><td>Indus Valley World School</td><td>Magic</td></tr>
                <tr><td>Mangalam Vidya Niketan</td><td>Mayhem</td></tr>
                <tr><td>Methodist School Dankuni</td><td>Myth</td></tr>
                <tr><td>Narayana School</td><td>Magic</td></tr>
                <tr><td>National English School Baguihati</td><td>Myth</td></tr>
                <tr><td>National English School Rajarhat</td><td>Mayhem</td></tr>
                <tr><td>Shri Shikshayatan School</td><td>Myth</td></tr>
                <tr><td>Sri Ram Narayan Singh Memorial School Rajdanga</td><td>Magic</td></tr>
                <tr><td>St. Augustine's Day School Barrackpore</td><td>Magic</td></tr>
                <tr><td>St. Augustine's Day School Shyamnagar</td><td>Myth</td></tr>
                <tr><td>St. Francis Xavier School</td><td>Myth</td></tr>
                <tr><td>St. John's Diocesan Girls' H.S. School</td><td>Mayhem</td></tr>
                <tr><td>The Assembly of God Church School Tollygunge</td><td>Mayhem</td></tr>
                <tr><td>The Heritage School</td><td>Magic</td></tr>
                <tr><td>The Newtown School</td><td>Myth</td></tr>
                <tr><td>Delhi Public School Newtown</td><td>Magic</td></tr>
            </tbody>
            </table>
        </div>
    </div>

    <div class="notice-container result">
        <div class="lottery">
            <h1 class='heading'> GLOBAL.BITES </h1>

            <table class="table">
            <thead>
            <tr>
                <th>School</th>
                <th>Allotment</th>
            </tr>
            </thead>
            <tbody>
                <tr><td>Calcutta Boys' School</td><td>Japan</td></tr>
                <tr><td>Calcutta Girls' High School</td><td>Greece</td></tr>
                <tr><td>Calcutta International School</td><td>China</td></tr>
                <tr><td>Delhi Public School Megacity</td><td>Greece</td></tr>
                <tr><td>Delhi Public School Ruby Park</td><td>South Korea</td></tr>
                <tr><td>Indus Valley World School</td><td>South Korea</td></tr>
                <tr><td>Mangalam Vidya Niketan</td><td>Japan</td></tr>
                <tr><td>Methodist School Dankuni</td><td>India</td></tr>
                <tr><td>Narayana School</td><td>Japan</td></tr>
                <tr><td>National English School Baguihati</td><td>India</td></tr>
                <tr><td>National English School Rajarhat</td><td>Italy</td></tr>
                <tr><td>Shri Shikshayatan School</td><td>China</td></tr>
                <tr><td>Sri Ram Narayan Singh Memorial School Rajdanga</td><td>South Korea</td></tr>
                <tr><td>St. Augustine's Day School Barrackpore</td><td>Mexico</td></tr>
                <tr><td>St. Augustine's Day School Shyamnagar</td><td>China</td></tr>
                <tr><td>St. Francis Xavier School</td><td>India</td></tr>
                <tr><td>St. John's Diocesan Girls' H.S. School</td><td>South Korea</td></tr>
                <tr><td>The Assembly of God Church School Tollygunge</td><td>Thailand</td></tr>
                <tr><td>The Heritage School</td><td>Thailand</td></tr>
                <tr><td>The Newtown School</td><td>Mexico</td></tr>
                <tr><td>Delhi Public School Newtown</td><td>Italy</td></tr>
            </tbody>
            </table>
        </div>
    </div>

    <div class="notice-container result">
        <div class="lottery">
            <h1 class='heading'> FLORAL.FANTASIA </h1>

            <table class="table">
            <thead>
            <tr>
                <th>School</th>
                <th>Allotment</th>
            </tr>
            </thead>
            <tbody>
                <tr><td>Calcutta Boys' School</td><td>Memory and Fragrance</td></tr>
                <tr><td>Calcutta Girls' High School</td><td>Trash to Bloom</td></tr>
                <tr><td>Calcutta International School</td><td>Musical Petals</td></tr>
                <tr><td>Delhi Public School Megacity</td><td>Memory and Fragrance</td></tr>
                <tr><td>Delhi Public School Ruby Park</td><td>Memory and Fragrance</td></tr>
                <tr><td>Indus Valley World School</td><td>Musical Petals</td></tr>
                <tr><td>Mangalam Vidya Niketan</td><td>Trash to Bloom</td></tr>
                <tr><td>Methodist School Dankuni</td><td>Memory and Fragrance</td></tr>
                <tr><td>Narayana School</td><td>Memory and Fragrance</td></tr>
                <tr><td>National English School Baguihati</td><td>Memory and Fragrance</td></tr>
                <tr><td>National English School Rajarhat</td><td>Trash to Bloom</td></tr>
                <tr><td>Shri Shikshayatan School</td><td>Trash to Bloom</td></tr>
                <tr><td>Sri Ram Narayan Singh Memorial School Rajdanga</td><td>Trash to Bloom</td></tr>
                <tr><td>St. Augustine's Day School Barrackpore</td><td>Trash to Bloom</td></tr>
                <tr><td>St. Augustine's Day School Shyamnagar</td><td>Musical Petals</td></tr>
                <tr><td>St. Francis Xavier School</td><td>Memory and Fragrance</td></tr>
                <tr><td>St. John's Diocesan Girls' H.S. School</td><td>Memory and Fragrance</td></tr>
                <tr><td>The Assembly of God Church School Tollygunge</td><td>Trash to Bloom</td></tr>
                <tr><td>The Heritage School</td><td>Trash to Bloom</td></tr>
                <tr><td>The Newtown School</td><td>Musical Petals</td></tr>
                <tr><td>Delhi Public School Newtown</td><td>Trash to Bloom</td></tr>
            </tbody>
            </table>
        </div>
    </div>

    <div class="notice-container result">
        <div class="lottery">
            <h1 class='heading'> EMPIRE.REBUILD </h1>

            <table class="table">
            <thead>
            <tr>
                <th>School</th>
                <th>Allotment</th>
            </tr>
            </thead>
            <tbody>
                <tr><td>Calcutta Boys' School</td><td>Community Radio Station</td></tr>
                <tr><td>Calcutta Girls' High School</td><td>Old Kolkata Chess Club</td></tr>
                <tr><td>Calcutta International School</td><td>Tram</td></tr>
                <tr><td>Delhi Public School Megacity</td><td>Kabigaan Company</td></tr>
                <tr><td>Delhi Public School Ruby Park</td><td>KCC (Kolkata Centre for Creativity)</td></tr>
                <tr><td>Indus Valley World School</td><td>Indian Coffee House</td></tr>
                <tr><td>Mangalam Vidya Niketan</td><td>Kumartuli (Idol Making)</td></tr>
                <tr><td>Methodist School Dankuni</td><td>Old Public Library</td></tr>
                <tr><td>Narayana School</td><td>Kolkata's Last Film-Strip Splicing Room</td></tr>
                <tr><td>National English School Baguihati</td><td>Single-Screen Cinema</td></tr>
                <tr><td>National English School Rajarhat</td><td>Heritage Ferry (River Transport)</td></tr>
                <tr><td>Shri Shikshayatan School</td><td>Yellow Ambassador Taxi</td></tr>
                <tr><td>Sri Ram Narayan Singh Memorial School Rajdanga</td><td>Kolkata Magic Lantern Projection Shows (Victoria Memorial Light and Sound Show)</td></tr>
                <tr><td>St. Augustine's Day School Barrackpore</td><td>Vinyl Record Stores</td></tr>
                <tr><td>St. Augustine's Day School Shyamnagar</td><td>Central Telegraph Office Aka Dead Letter Office</td></tr>
                <tr><td>St. Francis Xavier School</td><td>Rooftop Adda Space</td></tr>
                <tr><td>St. John's Diocesan Girls' H.S. School</td><td>Marble Palace Heritage Mansion</td></tr>
                <tr><td>The Assembly of God Church School Tollygunge</td><td>Street Kathi Roll Store</td></tr>
                <tr><td>The Heritage School</td><td>North Kolkata Bonedi Bari Tours</td></tr>
                <tr><td>The Newtown School</td><td>Heritage Tea Cabin</td></tr>
                <tr><td>Delhi Public School Newtown</td><td>Flower Market (Mullick Ghat)</td></tr>
            </tbody>
            </table>
        </div>
    </div>

    
        <!--<div class="notice-container result">
            <div class="lottery">
                <h1 class='heading'> NAZAKAT </h1>

                <table class="table">
                <thead>
                <tr>
                  <th>School</th>
                  <th>Allotment</th>
                </tr>
              </thead>
                  <tbody>
                    <tr><td>St. Xaviers Collegiate School</td><td>Mesopotamian</td></tr>
                    <tr><td>National English School, Baguiati</td><td>Native American</td></tr>
                    <tr><td>St. Francis Xavier's</td><td>Japanese</td></tr>
                    <tr><td>St. Augustine Day School Barrackpore</td><td>Russian</td></tr>
                    <tr><td>Delhi Public School Megacity</td><td>Aztec</td></tr>
                    <tr><td>Delhi Public School Newtown</td><td>Greek</td></tr>
                    <tr><td>Methodist School Dankuni</td><td>Korean</td></tr>
                    <tr><td>St. Augustine Day School, Shyamnagar</td><td>Norse</td></tr>
                    <tr><td>Mangalam Vidya Niketan</td><td>Celtic</td></tr>
                    <tr><td>The Bhawanipur Gujrati Education Society</td><td>Egyptian</td></tr>
                    <tr><td>Narayana School Newtown</td><td>Mayan</td></tr>
                    <tr><td>Salt Lake School</td><td>Chinese</td></tr>
                    <tr><td>North Point</td><td>Persian</td></tr>
                  </tbody>
                </table>
            </div>
        </div>

         <div class="notice-container result">
            <div class="lottery">
                <h1 class='heading'> NRITYA KATHA </h1>

                <table class="table">
                <thead>
                <tr>
                  <th>School</th>
                  <th>Allotment</th>
                </tr>
              </thead>
                  <tbody>
                    <tr><td>Delhi Public School Megacity</td><td>R &amp; B Music</td></tr>
                    <tr><td>QMS</td><td>Indian Classical Music</td></tr>
                    <tr><td>Methodist School Dankuni</td><td>Jazz Music</td></tr>
                    <tr><td>Delhi Public School Ruby Park</td><td>Phonk Music</td></tr>
                    <tr><td>The BGES</td><td>Latin Music</td></tr>
                    <tr><td>St. Xavier's Collegiate School</td><td>Pop Music</td></tr>
                    <tr><td>Pramila Memorial Advanced School</td><td>Disco Music</td></tr>
                    <tr><td>Delhi Public School Newtown</td><td>Hip Hop Music</td></tr>
                    <tr><td>St. Augustine School, Barrackpore</td><td>Reggae Music</td></tr>
                    <tr><td>St. Francis Xavier School</td><td>Electronic Dance Music</td></tr>
                    <tr><td>Mangalam Vidya Niketan</td><td>Indie Music</td></tr>
                    <tr><td>Salt Lake School</td><td>Country Music</td></tr>
                    <tr><td>Narayana</td><td>Gothic Music</td></tr>
                    <tr><td>NES, Baguiati</td><td>Folk Music</td></tr>
                    <tr><td>NES, Rajarhat</td><td>Rock Music</td></tr>
                  </tbody>
                </table>
            </div>
        </div>


        <div class="notice-container result">
            <div class="lottery">
                <h1 class='heading'> INDRA'S INFLUENCE </h1>

                <table class="table">
                  <thead>
                    <tr>
                      <th>School</th>
                      <th>Industry</th>
                      <th>Associated Cities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>St. Francis Xavier</td>
                      <td>Chemical &amp; Fertilizers</td>
                      <td>Vadodara &amp; Mahabaleshwar</td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Newtown</td>
                      <td>Information Technology &amp; ITES</td>
                      <td>Bhubaneswar &amp; Patna</td>
                    </tr>
                    <tr>
                      <td>National English School, Baguiati</td>
                      <td>Handicraft</td>
                      <td>Jaipur &amp; Hassan</td>
                    </tr>
                    <tr>
                      <td>Salt Lake School</td>
                      <td>Pharmaceutical &amp; Biotech</td>
                      <td>Pune &amp; Chhindwara</td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Rubypark</td>
                      <td>Real Estate</td>
                      <td>Ayodhya &amp; Darbanga</td>
                    </tr>
                    <tr>
                      <td>St. Xavier's Collegiate School</td>
                      <td>Education</td>
                      <td>Kota &amp; Muzaffarpur</td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Megacity</td>
                      <td>Renewable Energy</td>
                      <td>Tirunelveli &amp; Kohima</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>

        <div class="notice-container result">
            <div class="lottery">
                <h1 class='heading'> VYAAPAR YAGNA </h1>

                <table class="table">
                  <thead>
                    <tr>
                      <th>School</th>
                      <th>Allotment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pramila Memorial Advanced School</td>
                      <td>From primary production to industrial output, connect agriculture to economic growth.</td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Newtown</td>
                      <td>Learn from data, adapt with time, and mimic intelligence to solve complex tasks.</td>
                    </tr>
                    <tr>
                      <td>St. Augustine Day School, Shyamnagar</td>
                      <td>Empowering healthier lives through balance, nutrition, and mindful living</td>
                    </tr>
                    <tr>
                      <td>Salt Lake School</td>
                      <td>Transforming potential into success with learning and practice.</td>
                    </tr>
                    <tr>
                      <td>The Newtown School, Kolkata</td>
                      <td> A sector shaping how we live, dress, eat, move, and unwind.</td>
                    </tr>
                    <tr>
                      <td>Narayana School Newtown</td>
                      <td>Small price, big demand, moving fast from shelf to hand.</td>
                    </tr>
                    <tr>
                      <td>The Heritage School</td>
                      <td>Grows with giggles, guides with care- where little steps shape lifelong paths.</td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Megacity</td>
                      <td>Counts dreams, calculates risks, and grows futures from figures.</td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Ruby Park</td>
                      <td>Speaks through screens, scrolls, and scripts—shaping what the world watches and feels.</td>
                    </tr>
                    <tr>
                      <td>St Xavier's Collegiate School</td>
                      <td>A quiet empire of keys and contracts, where land leads legacy.</td>
                    </tr>
                    <tr>
                      <td>National English School, Baguiati</td>
                      <td>Reducing waste, conserving resources, and choosing renewable paths.</td>
                    </tr>
                    <tr>
                      <td>Our Lady Queen of the Missions School, Salt Lake</td>
                      <td>B2B networked partnerships built on trust and performance.</td>
                    </tr>
                    <tr>
                      <td>St Francis Xavier School</td>
                      <td>Battles, quests, and endless lives— where reality pauses and game begins. </td>
                    </tr>
                    <tr>
                      <td>St Augustine's Day School, Barrackpore</td>
                      <td>Wears adventure like skin, lives between suitcases, movement and flights to catch.</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>

        <div class="notice-container result">
            <div class="lottery">
                <h1 class='heading'> VANIJYA VERSE </h1>

                <table class="table">
                  <thead>
                    <tr>
                      <th>School</th>
                      <th>Allotment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pramila Memorial Advanced School</td>
                      <td>Pharmaceuticals: <br/>
Boehringer Ingelheim <br/>
Close Competitor - Takeda Pharmaceutical <br />
Time Period: 2015-2016 phase <br /> </td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Newtown</td>
                      <td>FMCG:<br/>
Beiersdorf AG<br/>
Close Competitor – Mars Incorporated<br/>
Time Period: 2008–2009<br/></td>
                    </tr>
                    <tr>
                      <td>St. Augustine Day School, Shyamnagar</td>
                      <td>Construction:<br/>
Shapoorji Pallonji & Co. Ltd.<br/>
Close Competitor – Larsen & Toubro Ltd.<br/>
Time Period: 2023–2024<br/>
</td>
                    </tr>
                    <tr>
                      <td>Salt Lake School (English Madium) </td>
                      <td>Real Estate:<br/>
Brookfield Asset Management<br/>
Close Competitor – Blackstone Inc<br/>
Time Period: 2008–2009<br/></td>
                    </tr>
                    <tr>
                      <td>Delhi Public School Megacity</td>
                      <td>Renewable Energy:<br/>
ReNew Power<br/>
Close Competitor – Adani Green Energy Ltd.<br/>
Time Period: 2018–2020<br/></td>
                    </tr>
                    <tr>
                      <td>St Xavier's Collegiate School</td>
                      <td>Textile:<br/>
Welspun India<br/>
Close Competitor – Ralph Lauren<br/>
Time Period: 2016–2018<br/></td>
                    </tr>
                    <tr>
                      <td>National English School, Baguiati</td>
                      <td>IT Services:<br/>
Infosys BPM (Business Process Management) – <i>A subsidiary of Infosys Ltd</i><br/>
Close Competitor – Genpact Ltd<br/>
Time Period: 2020–2022<br/></td>
                    </tr>
                    <tr>
                      <td>Mangalam Vidya Niketan</td>
                      <td>Education Technology:<br/>
Byju’s<br/>
Close Competitor – Chegg Inc<br/>
Time Period: 2021–2022<br/></td>
                    </tr>
                    <tr>
                      <td>St Augustine's Day School, Barrackpore</td>
                      <td>Jewellery:<br/>
Kalyan Jewellers (Prior to IPO in 2021)<br/>
Close Competitor – Titan Company Ltd. (Tanishq Brand)<br/>
Time Period: 2016–2020<br/></td>
                    </tr>
                    <tr>
                      <td>Methodist School Dankuni</td>
                      <td>Automobile:<br/>
Aston Martin<br/>
Close Competitor - Mercedes<br/>
Time Period: 2018–2023<br/></td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>

        <div class="notice-container result">
          <div class="lottery">
            <h1 class='heading'> LEELA MANCH </h1>

            <table class="table">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Allotment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Delhi Public School Ruby Park</td>
                  <td><b>The Prize of Power:</b><br/>
                      Reflects stories like Ravana’s or Duryodhana’s. How far can ambition go before it consumes you?<br/>
                  </td>
                </tr>

                <tr>
                  <td>St. Xavier's Collegiate School</td>
                  <td><b>When Time Loops:</b><br/>
                      Inspired by the concept of yugas, what if someone lives the same moment of their life again?<br/>
                  </td>
                </tr>

                <tr>
                  <td>Delhi Public School Newtown</td>
                  <td><b>Nagas Among Us:</b><br/>
                      Serpent beings from mythology hide among humans, guarding secrets or seeking revenge.<br/>
                  </td>
                </tr>

                <tr>
                  <td>NES, Baguiati</td>
                  <td><b>Godly Powers, Mortal Problems:</b><br/>
                      What happens when random people wake up with the powers of gods?<br/>
                  </td>
                </tr>

                <tr>
                  <td>St. Augustine's Day School, Shyamnagar</td>
                  <td><b>The Vahanas Refuse:</b><br/>
                      What if the divine transport of the deities refuse to serve them anymore? Tired, rebellious, or feeling ignored, these loyal beings rebel.<br/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> -->
        </div>
    </section>
  `;

  return container;
}
