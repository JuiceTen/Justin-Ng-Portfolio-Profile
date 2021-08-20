import Highway from '@dogstudio/highway'
import gsap from 'gsap'

class Fade extends Highway.Transition {
    in({from, to, done}) {
        from.remove();

        gsap.fromTo(to,  
            {
                opacity: 0,
                duration: 1 
            },
            {
                opacity: 1,
                onComplete: function() {
                    done()
                }
            }
        )

    }
    out({from, done}){
        gsap.fromTo(from,
            {
                opacity: 1,
                duration: 1
            },
            {
                opacity: 0,
                onComplete: done()
            }
            )
    }
}

class Screen extends Highway.Transition {
    in({from, to, done}) {
        from.remove();

        gsap.fromTo(to,
            {
                left: '-100%',
                top: '50%',
                duration: 2
            },
            {
                left: '0%',
            }
        
        )

        gsap.fromTo(to, 
                {
                    duration: 0.5,
                    height: '1vh'
                },
                {
                    height: '100vh',
                    top: '10%',
                    onComplete: done
                }
        )
        
    }
    out({from, done}) {
        done()
    }
}

export {Fade, Screen}