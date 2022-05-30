import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Tuto = () => {

return ( 
 <>
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'balck', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={""}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
    
      iconStyle={{ background: 'black', color: '#fff' }}
      icon={""}
    >
      <h3 className="vertical-timeline-element-title">Art Director</h3>
      <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
</>
)
} 
export default Tuto