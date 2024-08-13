import { ScissorsIcon } from './assets/icons/ScissorsIcon'
import { Logo } from './assets/images/Logo'
import { Triangle } from './assets/images/Triangle'
import { PaperButton } from './components/PaperButton'
import { RockButton } from './components/RockButton'
import { ScissorsButton } from './components/ScissorsButton'

export function App() {
  return (
    <div className="relative h-screen pt-12">
      <button className="absolute bottom-8 right-8 h-10.5 w-33 rounded-lg border-2 border-white font-semibold tracking-wide text-white transition duration-300 hover:bg-white/10">
        RULES
      </button>

      <header className="mx-auto flex w-full max-w-3xl items-center justify-between rounded-2xl border-4 border-header-outline px-6 py-5">
        <Logo />
        <div className="flex w-37 flex-col items-center rounded-lg bg-white p-4">
          <span className="font-semibold leading-normal tracking-wide text-score-text">
            SCORE
          </span>
          <strong className="text-6xl leading-none text-dark-text">12</strong>
        </div>
      </header>

      {/* <main className="relative mt-16 flex flex-col items-center gap-6">
        <Triangle className="absolute left-1/2 top-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2 transform" />

        <div className="flex gap-20">
          <PaperButton />
          <ScissorsButton />
        </div>
        <div>
          <RockButton />
        </div>
      </main> */}

      <main className="mt-18 flex justify-center gap-45">
        <div>
          <p className="text-center text-2xl font-semibold text-white">
            YOU PICKED
          </p>
          <div className="mt-16 flex h-[300.4px] w-[293px] items-start justify-start">
            <ScissorsButton className="origin-top-left scale-[1.48]" disabled />
          </div>
        </div>
        <div>
          <p className="text-center text-2xl font-semibold text-white">
            THE HOUSE PICKED
          </p>
          <div className="relative mt-16 flex h-[300.4px] w-[293px] items-start justify-start">
            {/* <RockButton className="origin-top-left scale-[1.48]" disabled /> */}
            <div className="bg-circle/50 absolute left-1/2 top-1/2 z-[-1] h-[224px] w-[224px] -translate-x-1/2 -translate-y-1/2 transform rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  )
}
