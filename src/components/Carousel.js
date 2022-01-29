import {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


//styles
import './Carousel.css'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
    "https://www.esmeraldascolombia.com/wp-content/uploads/2021/06/Banner-Cadenas-Negro-1536x432-1.jpg",
  },
  {
    label: 'Bird',
    imgPath:
    "https://www.esmeraldascolombia.com/wp-content/uploads/2021/06/Banner-Dijes-Mujer-OP.jpg",
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
    "https://www.esmeraldascolombia.com/wp-content/uploads/2021/06/Banner-Aretes-2048x576-1.jpg",
  },
  {
    label: 'Goč, Serbia',
    imgPath:
    "https://www.esmeraldascolombia.com/wp-content/uploads/2021/06/Banner-Reykon2-2048x576-1.jpg",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className="carousel-space"  sx={{ width: "100%", flexGrow: 1, color:'blue' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval="5000"
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <><Box className="carousel-image"
                component="img"
                sx={{
                  height: "80hv",
                  display: 'block',             
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />              
            <div className={true?"carousel-content":""} >        
            <h2 >Titulo a mostrar</h2>
            <p >Contenido a mostrar</p>
            </div>

              </>
            ) : null}
             
          </div>
        ))}        
      </AutoPlaySwipeableViews>
      {/* {start code to refactor} */}
      <MobileStepper 
        sx={{ 
          maxWidth: '100%', 
          flexGrow: 1, 
          backgroundColor: "transparent", 
          color: "red",
          display:"flex",
          color:"yellow",
          height:"2%",
          justifyContent:"center",
          bottom:"-1px",
          position:"absolute",
          width: "100%" 
           }}                  
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        variant='dots'
              
      />

      {/* ends code to refactor */}
      <div className="left-arrow"> 
      <Button className="hide"
          sx={{           
          color: "transparent",
          height:"100%",
          }} 
           size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight   />
            ) : (
              <KeyboardArrowLeft />
            )}
            
          </Button>
      </div>
      <div  className="right-arrow">
      <Button className="hide right-button" 
          sx={{           
          color: "transparent",
          height:"100%",
          }} 
          size="small"          
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button></div>
    </Box>
  );
}

export default SwipeableTextMobileStepper;