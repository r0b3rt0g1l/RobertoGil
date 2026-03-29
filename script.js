*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:  #080808;
  --t1:  #EBEBEB;
  --t2:  #585858;
  --t3:  #282828;
  --o:   #F05A28;
  --tr:  0.18s cubic-bezier(0.4, 0, 0.2, 1);
  --f:   'Inter', -apple-system, sans-serif;
}

body {
  background: var(--bg);
  color: var(--t1);
  font-family: var(--f);
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(ellipse at 50% 46%, rgba(240,90,40,0.06) 0%, transparent 58%);
}

.lang {
  position: fixed;
  top: 1.75rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  opacity: 0;
  animation: f 0.4s 0.1s ease forwards;
}

.lang span,
.lang-btn {
  font-family: var(--f);
  font-size: 0.575rem;
  letter-spacing: 0.1em;
  color: var(--t3);
  background: none;
  border: none;
  cursor: pointer;
  transition: color var(--tr);
}

.lang-btn.active            { color: var(--t2); }
.lang-btn:hover:not(.active){ color: var(--t2); }

main {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.name {
  font-size: clamp(4.5rem, 13vw, 10rem);
  font-weight: 200;
  letter-spacing: -0.045em;
  line-height: 1;
  color: var(--t1);
  margin-bottom: 0.6em;
  opacity: 0;
  animation: u 0.7s 0.2s ease forwards;
}

.tagline {
  font-size: clamp(1.125rem, 2.5vw, 1.75rem);
  font-weight: 300;
  letter-spacing: -0.01em;
  color: var(--t2);
  margin-bottom: 1rem;
  opacity: 0;
  animation: u 0.7s 0.32s ease forwards;
}

.tagline em { font-style: normal; color: var(--o); }

.sub {
  font-size: 0.8125rem;
  color: var(--t2);
  margin-bottom: 3rem;
  opacity: 0;
  animation: u 0.7s 0.42s ease forwards;
}

.actions {
  display: flex;
  gap: 0.625rem;
  opacity: 0;
  animation: u 0.7s 0.52s ease forwards;
}

.btn {
  text-decoration: none;
  font-family: var(--f);
  font-size: 0.75rem;
  color: var(--t2);
  border: 1px solid var(--t3);
  border-radius: 100px;
  padding: 0.55rem 1.25rem;
  transition: color var(--tr), border-color var(--tr), background var(--tr);
}

.btn:hover       { color: var(--t1); border-color: #4a4a4a; background: rgba(255,255,255,0.04); }
.btn.warm        { color: var(--o);  border-color: rgba(240,90,40,0.3); }
.btn.warm:hover  { border-color: rgba(240,90,40,0.55); background: rgba(240,90,40,0.06); }

.copy {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.55rem;
  letter-spacing: 0.06em;
  color: var(--t3);
  opacity: 0;
  animation: f 0.4s 0.7s ease forwards;
}

@keyframes u { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
@keyframes f { from { opacity:0; } to { opacity:1; } }

:focus-visible { outline: 1px solid var(--o); outline-offset: 3px; border-radius: 3px; }

@media (max-width: 480px) {
  .lang    { top: 1.25rem; right: 1.25rem; }
  .actions { flex-direction: column; align-items: center; }
  .btn     { min-width: 150px; text-align: center; }
}
