import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Main from '../Main/Main'
import useLaunches from '../hooks/useLaunches'
import Youtube from 'react-youtube'
import './details.css'


const Details = (props) => {
  const [launch, setLaunch] = useState(null);

  const {getLaunch} = useLaunches();
  useEffect(() => {
    setLaunch(getLaunch(props.match.params.id))
  }, [getLaunch])
  const history = useHistory()

  if(!launch) return ( <div> Загрузка... </div> )

  return(
      <>
        <Main name ={launch.name}/>
      	<main class="details">
      		<div class="container">
      			<div class="details-row">
      				<div class="details-image">
      					<img src={launch.links.patch.small} alt={launch.name} />
      				</div>
      				<div class="details-content">
      					<p class="details-description">{launch.details}</p>
      				</div>
      			</div>

            <Youtube className='details-youtube' videoId={launch.links.youtube_id}/>
      		</div>
      		<a onClick={history.goBack} class="button button-back">go back</a>
      	</main>
      </>
  )
}


export default Details;
